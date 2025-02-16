<script lang="ts" setup>
import useDragAndDrop from '@/components/ruleEngine/event/useDnD.js'

const {onDragStart} = useDragAndDrop()

defineProps<{
  filter: string
}>()
</script>

<template>

  <el-collapse-item title="数据转换" name="mappingNodes">
    <div class="nodes">

      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'mapping')">数据转换</div>



    </div>
  </el-collapse-item>
</template>

<style scoped>

.nodes {
  display: flex;
  flex-direction: column;
}
</style>
