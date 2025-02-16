<!-- src/components/ruleEngine/nodes/input/StartNode.vue -->

<script setup>
import {computed, toRef} from 'vue'
import {Handle, useHandleConnections} from '@vue-flow/core'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  sourcePosition: {
    type: String,
  },
  targetPosition: {
    type: String,
  },
})

const sourceConnections = useHandleConnections({
  type: 'target',
})

const targetConnections = useHandleConnections({
  type: 'source',
})

const isSender = toRef(() => sourceConnections.value.length <= 0)

const isReceiver = toRef(() => targetConnections.value.length <= 0)

const bgColor = computed(() => {
  if (props.data.type === 'start') {
    return '#2563eb'
  }

  return '#4b5563'
})

const processLabel = computed(() => {
  if (props.data.type === 'start') {
    return '▶️' // 开始节点图标
  }

  return ''
})
</script>

<template>
  <div class="process-node" :style="{ backgroundColor: bgColor }">


  </div>
</template>

<style scoped>
.process-node {
  padding: 10px;
  border-radius: 99px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.process-node .vue-flow__handle {
  border: none;
  height: unset;
  width: unset;
  background: transparent;
  font-size: 12px;
}
</style>
