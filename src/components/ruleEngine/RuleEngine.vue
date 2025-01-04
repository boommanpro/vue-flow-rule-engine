<!-- src/RuleEngine.vue -->
<template>
  <div class="vue-flow" @drop="onDrop">

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


      <custom-controls v-model:nodes="nodes"/>

      <dropzone-background/>


    </vue-flow>

    <sidebar v-model:node="selectedNode" v-model:modal-visible="showModal"/>

  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useVueFlow, VueFlow} from "@vue-flow/core";
import '@vue-flow/controls/dist/style.css';
import CustomControls from "@/components/ruleEngine/control/CustomControls.vue";
import Sidebar from "@/components/ruleEngine/siderbar/Sidebar.vue";

import useDragAndDrop from './useDnD.js'
import setupRuleEngine from './event/ruleEngine.js'
import DropzoneBackground from "@/components/ruleEngine/background/DropzoneBackground.vue";
import ToolbarNode from "@/components/ruleEngine/toolbar/ToolbarNode.vue";
import ProcessNode from "@/components/ruleEngine/siderbar/nodes/ProcessNode.vue";

const {onDragOver, onDrop, onDragLeave, isDragOver} = useDragAndDrop()
setupRuleEngine();
// 初始化节点和边
const nodes = ref([]);
const edges = ref([]);
const showModal = ref(false)

// 处理节点点击事件
const handleNodeClick = (node) => {
  if (node.type === 'rule') {
    // 在规则引擎按钮上添加新的规则引擎按钮
    addNode('rule', node.id);
  }
  selectedNode.value = node.node;
  showModal.value = true;
  console.log(selectedNode)
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





const selectedNode = ref(null);
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
