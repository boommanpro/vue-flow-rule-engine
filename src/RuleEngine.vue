<!-- src/RuleEngine.vue -->
<template>
  <div class="vue-flow">
    <vue-flow
        v-model:nodes="nodes"
        v-model:edges="edges"
        class="basic-flow"
        :default-viewport="{ zoom: 1 }"
        :min-zoom="0.2"
        :max-zoom="4"
        @node-click="handleNodeClick"
    >
      <custom-controls
          @resetTransform="resetTransform"
          @updatePos="updatePos"
          @logToObject="logToObject"
      />
      <background variant="lines"/>
      <mini-map pannable zoomable />
    </vue-flow>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Background } from "@vue-flow/background";
import { MiniMap } from "@vue-flow/minimap";
import { useVueFlow, VueFlow } from "@vue-flow/core";
import '@vue-flow/controls/dist/style.css';
import CustomControls from "@/components/CustomControls.vue";

// 初始化节点和边
const nodes = ref([]);
const edges = ref([]);

// 处理节点点击事件
const handleNodeClick = (node) => {
  if (node.type === 'rule') {
    // 在规则引擎按钮上添加新的规则引擎按钮
    addNode('rule', node.id);
  }
};

// 添加节点
const addNode = (type, parentId) => {
  const newNode = {
    id: `node-${nodes.value.length + 1}`,
    type: type,
    position: { x: 0, y: 0 },
    data: { label: type === 'input' ? '初始化' : type === 'rule' ? '规则引擎' : '结束' },
  };
  if (type === 'rule') {
    // 计算新规则引擎按钮的位置
    const lastNode = nodes.value.find((n) => n.id === parentId);
    newNode.position = {
      x: lastNode.position.x + 200,
      y: lastNode.position.y,
    };
  }
  nodes.value.push(newNode);
};

// 初始化时添加一个初始化节点
onMounted(() => {
  addNode('input');
});

const { onInit, onNodeDragStop, onConnect, addEdges, setViewport, toObject } = useVueFlow();

/**
 * This is a Vue Flow event-hook which can be listened to from anywhere you call the composable, instead of only on the main component
 * Any event that is available as `@event-name` on the VueFlow component is also available as `onEventName` on the composable and vice versa
 *
 * onInit is called when the VueFlow viewport is initialized
 */
onInit((vueFlowInstance) => {
  // instance is the same as the return of `useVueFlow`
  vueFlowInstance.fitView();
});

/**
 * onNodeDragStop is called when a node is done being dragged
 *
 * Node drag events provide you with:
 * 1. the event object
 * 2. the nodes array (if multiple nodes are dragged)
 * 3. the node that initiated the drag
 * 4. any intersections with other nodes
 */
onNodeDragStop(({ event, nodes, node }) => {
  console.log('Node Drag Stop', { event, nodes, node });
});

/**
 * onConnect is called when a new connection is created.
 *
 * You can add additional properties to your new edge (like a type or label) or block the creation altogether by not calling `addEdges`
 */
onConnect((connection) => {
  addEdges(connection);
});

/**
 * To update a node or multiple nodes, you can
 * 1. Mutate the node objects *if* you're using `v-model`
 * 2. Use the `updateNode` method (from `useVueFlow`) to update the node(s)
 * 3. Create a new array of nodes and pass it to the `nodes` ref
 */
function updatePos() {
  nodes.value = nodes.value.map((node) => {
    return {
      ...node,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    };
  });
}

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject() {
  console.log(toObject());
}

/**
 * Resets the current viewport transformation (zoom & pan)
 */
function resetTransform() {
  setViewport({ x: 0, y: 0, zoom: 1 });
}
</script>

<style>
.vue-flow {
  height: 100vh;
  position: relative; /* 确保子组件可以正确定位 */
}

.basic-flow {
  height: 100%;
}

/* 调试样式 */
.vue-flow__controls,
.vue-flow__minimap {
  z-index: 1000; /* 确保按钮在最上层 */
}
</style>
