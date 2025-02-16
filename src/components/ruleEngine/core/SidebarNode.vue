<script lang="ts" setup>
import useDragAndDrop from '@/components/ruleEngine/event/useDnD.js'
import type {Component} from 'vue';

const {onDragStart} = useDragAndDrop()

defineProps<{
  type: string,
  name: string,
  icon: Component,
}>()
</script>
<template>
  <div class="side-bar-node tf-btn" :draggable="true" @dragstart="onDragStart($event, type)">
    <el-icon :size="24" style="margin-left: 10px;margin-right: 20px">
      <component :is="icon"/>
    </el-icon>
    <span>{{ name }}</span>
  </div>
</template>
<style lang="scss" scoped>
.side-bar-node {
  border: none;
  width: 100%;
  justify-content: flex-start;
  display: flex; /* 添加 Flexbox */
  align-items: center; /* 垂直居中 */
  height: 40px;
  gap: 10px;
  cursor: grabbing;
  border-radius: 5px;

  &:hover {
    background-color: rgba(204, 204, 204, 0.45); /* 灰色背景 */
  }
}

.tf-btn {
  border: none;
  width: 100%;
  justify-content: flex-start;
  height: 40px;
  gap: 10px;
  cursor: grabbing;
  border-radius: 5px;

  svg {
    width: 20px;
    height: 20px;
    fill: #2563EB;
  }

  &:hover {
    background: #f1f1f1;
  }
}

.el-col {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 确保 span 靠左对齐 */
}
</style>
