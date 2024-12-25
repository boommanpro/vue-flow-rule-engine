<script lang="ts" setup>
import useDragAndDrop from '@/components/ruleEngine/useDnD.js'

const {onDragStart} = useDragAndDrop()

import { ref } from 'vue'

defineProps<{
  filter:string
}>()
</script>

<template>

  <el-collapse-item title="基础组件" name="1">
    <div class="nodes">
      <!-- Input nodes -->
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'input')">输入</div>
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'mapping')">数据转换</div>
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'switch')">Switch组件</div>
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'boolean')">Boolean组件</div>
      </div>
  </el-collapse-item>
</template>

<style scoped>

.nodes {
  display: flex;
  flex-direction: column;
}
</style>
