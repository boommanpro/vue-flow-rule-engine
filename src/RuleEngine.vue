<template>
  <div style="height: 500px; width: 100%; border: 1px solid #ccc;">
    <VueFlow :nodes="nodes" :edges="edges" class="vue-flow-container"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { VueFlow } from '@vue-flow/core';

const nodes = ref([
  { id: '1', label: '页面初始化', type: 'input', class: 'node-input', position: { x: 25, y: 25 } },
  { id: '2', label: '请求数据', type: 'input', class: 'node-operation', position: { x: 200, y: 25 } },
  { id: '3', label: '请求数据', type: 'input', class: 'node-operation', position: { x: 400, y: 25 } },
  { id: '4', label: '请求数据', type: 'input', class: 'node-operation', position: { x: 600, y: 25 } },
  { id: '5', label: '页面跳转', type: 'output', class: 'node-output', position: { x: 800, y: 25 } },
]);

const edges = ref([
  { id: 'e1-2', source: '1', target: '2', class: 'edge' },
  { id: 'e2-3', source: '2', target: '3', class: 'edge' },
  { id: 'e3-4', source: '3', target: '4', class: 'edge' },
  { id: 'e4-5', source: '4', target: '5', class: 'edge' },
  { id: 'e4-alt', source: '4', target: '3', class: 'edge-alt' },
]);
</script>

<style scoped>
.vue-flow-container {
  height: 100%;
  width: 100%;
}

.node-input {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}

.node-operation {
  color: #fff;
  background-color: #13c2c2;
  border-color: #13c2c2;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}

.node-output {
  color: #fff;
  background-color: #2f54eb;
  border-color: #2f54eb;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}

.edge {
  stroke: #aaa;
}

.edge-alt {
  stroke-dasharray: 5, 5;
}
</style>
