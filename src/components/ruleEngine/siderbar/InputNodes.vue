<script lang="ts" setup>
import useDragAndDrop from '@/components/ruleEngine/event/useDnD.js'

const {onDragStart} = useDragAndDrop()

defineProps<{
  filter: string
}>()
</script>

<template>

  <el-collapse-item title="输入组件" name="inputNodes">
    <div class="nodes">
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'Demo')">demo</div>
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'StartNode')">开始节点</div>
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'input')">输入</div>
    </div>
  </el-collapse-item>
</template>

<style scoped>

.nodes {
  display: flex;
  flex-direction: column;
}
</style>
