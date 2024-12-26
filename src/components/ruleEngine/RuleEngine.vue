<!-- src/RuleEngine.vue -->
<template>
  <div class="vue-flow" @drop="onDrop">
    <sidebar/>

    <vue-flow
        v-model:nodes="nodes"
        v-model:edges="edges"
        class="basic-flow"
        :default-viewport="{ zoom: 1}"
        :min-zoom="0.2"
        :max-zoom="4"
        @node-click="handleNodeClick"
        @dragover="onDragOver" @dragleave="onDragLeave">


      <template #node-menu="props">
        <toolbar-node :id="props.id" :data="props.data"/>
      </template>


      <template #node-process-node="props">
        <process-node :data="props.data" :source-position="props.sourcePosition"
                      :target-position="props.targetPosition"/>
      </template>

      <mini-map pannable zoomable/>

      <custom-controls
          @resetTransform="resetTransform"
          @updatePos="updatePos"
          @logToObject="logToObject"
      />

      <dropzone-background
          :style="{
          backgroundColor: isDragOver ? '#e7f3ff' : 'transparent',
          transition: 'background-color 0.2s ease',
        }"
      />

      <p v-if="isDragOver">Drop here</p>

    </vue-flow>

    <node-edit-modal v-if="selectedNode" :node="selectedNode" :visible="isModalVisible" @update:visible="isModalVisible = $event" @updateNode="updateNode"/>

  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {MiniMap} from "@vue-flow/minimap";
import {useVueFlow, VueFlow} from "@vue-flow/core";
import '@vue-flow/controls/dist/style.css';
import CustomControls from "@/components/ruleEngine/CustomControls.vue";
import Sidebar from "@/components/ruleEngine/siderbar/Sidebar.vue";

import useDragAndDrop from './useDnD.js'
import DropzoneBackground from "@/components/ruleEngine/DropzoneBackground.vue";
import ToolbarNode from "@/components/ruleEngine/ToolbarNode.vue";
import ProcessNode from "@/components/ruleEngine/siderbar/nodes/ProcessNode.vue";
import NodeEditModal from "@/components/ruleEngine/siderbar/drawer/NodeEditModal.vue";

const {onDragOver, onDrop, onDragLeave, isDragOver} = useDragAndDrop()

// 初始化节点和边
const nodes = ref([]);
const edges = ref([]);

// 处理节点点击事件
const handleNodeClick = (node) => {
  if (node.type === 'rule') {
    // 在规则引擎按钮上添加新的规则引擎按钮
    addNode('rule', node.id);
  }
  selectedNode.value = node.node;
  console.log(selectedNode)
  isModalVisible.value = true;
};

// 添加节点
const addNode = (type, parentId) => {
  const newNode = {
    id: `node-${nodes.value.length + 1}`,
    type: type,
    position: {x: 0, y: 0},
    data: {label: type === 'input' ? '初始化' : type === 'rule' ? '规则引擎' : '结束'},
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

});

const {onInit, onNodeDragStop, onConnect, addEdges, setViewport, toObject} = useVueFlow();

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
onNodeDragStop(({event, nodes, node}) => {
  console.log('Node Drag Stop', {event, nodes, node});
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
  setViewport({x: 0, y: 0, zoom: 1});
}



const selectedNode = ref(null);
const isModalVisible = ref(false);


const updateNode = (updatedNode) => {
  console.log(updatedNode)
  const index = nodes.value.findIndex(n => n.id === updatedNode.id);
  if (index !== -1) {
    nodes.value[index] = updatedNode;
  }
};
</script>

<style>
.vue-flow {
  height: 100vh;
  position: relative; /* 确保子组件可以正确定位 */
}

.basic-flow {
  height: 100%;
}

.vue-flow__node-input,
.vue-flow__node-default,
.vue-flow__node-output {
  z-index: 100; /* 根据需要调整 */
}

/* 调试样式 */
.vue-flow__controls,
.vue-flow__minimap {
  z-index: 100; /* 确保按钮在最上层 */
}


.vue-flow aside {
  z-index: 100; /* 确保按钮在最上层 */
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-weight: 700;
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .3);
  box-shadow: 0 5px 10px #0000004d
}

.vue-flow__node-toolbar {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: #2d3748;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.vue-flow__node-toolbar button {
  background: #4a5568;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}

.vue-flow__node-toolbar button.selected {
  background: #2563eb;
}

.vue-flow__node-toolbar button:hover {
  background: #2563eb;
}

.vue-flow__node-menu {
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.vue-flow__node-menu.selected {
  box-shadow: 0 0 0 2px #2563eb;
}

.custom-controls {
  position: absolute;
  top: 10px; /* 距离顶部的距离 */
  right: 10px; /* 距离右侧的距离 */
  display: flex;
  gap: 10px; /* 按钮之间的间距 */
  z-index: 100; /* 确保按钮在最上层 */
}
</style>
