<script setup>
import {computed, toRef} from 'vue'
import {Handle, Position, useHandleConnections} from '@vue-flow/core'
import {NodeToolbar} from "@vue-flow/node-toolbar";


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
  if (isSender.value) {
    return '#2563eb'
  }

  if (props.data.hasError) {
    return '#f87171'
  }

  if (props.data.isFinished) {
    return '#42B983'
  }

  if (props.data.isCancelled) {
    return '#fbbf24'
  }

  return '#4b5563'
})

const processLabel = computed(() => {
  if (props.data.hasError) {
    return '❌'
  }

  if (props.data.isSkipped) {
    return '🚧'
  }

  if (props.data.isCancelled) {
    return '🚫'
  }

  if (isSender.value) {
    return '📦'
  }

  if (props.data.isFinished) {
    return '😎'
  }

  return '🏠'
})

const deleteNode = (id) => {
  // 删除节点
  // ...
  console.log(id)
}
</script>

<template>
  <div class="process-node"
       :style="{ backgroundColor: bgColor, boxShadow: data.isRunning ? '0 0 10px rgba(0, 0, 0, 0.5)' : '' }">

    <NodeToolbar :is-visible="true" :position="Position.Top">
      <div class="tf-node-toolbar">


      <el-button link>
          <div style="font-size: 20px">
            <svg t="1739684239134" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4249" data-spm-anchor-id="a313x.search_index.0.i1.340c3a81lGWLdv" width="16" height="16"><path d="M226.592 896C167.616 896 128 850.48 128 782.736V241.264C128 173.52 167.616 128 226.592 128c20.176 0 41.136 5.536 62.288 16.464l542.864 280.432C887.648 453.792 896 491.872 896 512s-8.352 58.208-64.272 87.088L288.864 879.536C267.712 890.464 246.768 896 226.592 896z m0-704.304c-31.008 0-34.368 34.656-34.368 49.568v541.472c0 14.896 3.344 49.568 34.368 49.568 9.6 0 20.88-3.2 32.608-9.248l542.864-280.432c21.904-11.328 29.712-23.232 29.712-30.608s-7.808-19.28-29.712-30.592L259.2 200.96c-11.728-6.048-23.008-9.264-32.608-9.264z" fill="#231815" p-id="4250"></path></svg>
          </div>
      </el-button>

      <el-button link>
        <svg t="1739699107429" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7598" width="16" height="16"><path d="M394.666667 106.666667h448a74.666667 74.666667 0 0 1 74.666666 74.666666v448a74.666667 74.666667 0 0 1-74.666666 74.666667H394.666667a74.666667 74.666667 0 0 1-74.666667-74.666667V181.333333a74.666667 74.666667 0 0 1 74.666667-74.666666z m0 64a10.666667 10.666667 0 0 0-10.666667 10.666666v448a10.666667 10.666667 0 0 0 10.666667 10.666667h448a10.666667 10.666667 0 0 0 10.666666-10.666667V181.333333a10.666667 10.666667 0 0 0-10.666666-10.666666H394.666667z m245.333333 597.333333a32 32 0 0 1 64 0v74.666667a74.666667 74.666667 0 0 1-74.666667 74.666666H181.333333a74.666667 74.666667 0 0 1-74.666666-74.666666V394.666667a74.666667 74.666667 0 0 1 74.666666-74.666667h74.666667a32 32 0 0 1 0 64h-74.666667a10.666667 10.666667 0 0 0-10.666666 10.666667v448a10.666667 10.666667 0 0 0 10.666666 10.666666h448a10.666667 10.666667 0 0 0 10.666667-10.666666v-74.666667z" fill="#000000" p-id="7599"></path></svg> </el-button>
      <el-button link @click="deleteNode(data)">
        <svg t="1739699029172" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6317" width="16" height="16"><path d="M580.352 747.648V388.672c0-41.856 65.344-41.856 65.344 0v358.912c0.064 41.856-65.344 41.856-65.344 0.064z m-196.032 0V388.672c0-41.856 65.344-41.856 65.344 0v358.912c0 41.856-65.344 41.856-65.344 0.064z m555.584-522.112h-163.392v-65.28c0-54.08-43.968-97.856-97.088-97.856H351.616a97.92 97.92 0 0 0-98.048 97.856v65.28H90.176c-41.856 0-41.856 65.216 0 65.216h849.664c41.92 0 41.92-65.216 0.064-65.216z m-620.928-65.28c0-17.344 15.296-32.64 32.64-32.64h327.808c17.344 0 31.68 13.312 31.68 32.64v65.28H318.976v-65.28z m424.832 815.744H286.272a97.92 97.92 0 0 1-97.984-97.856V388.672c0-19.392 15.296-32.64 32.64-32.64s32.704 13.248 32.704 32.64v489.408c0 17.344 15.36 32.64 32.64 32.64h457.536a33.6 33.6 0 0 0 32.704-32.64V389.696c0-42.816 65.344-42.816 65.344 0v488.448a97.984 97.984 0 0 1-98.048 97.856z m0 0" fill="#272636" p-id="6318"></path></svg>
      </el-button>
      </div>
    </NodeToolbar>

    <Handle v-if="!isSender" type="target" :position="targetPosition">
      <span
          v-if="!data.isRunning && !data.isFinished && !data.isCancelled && !data.isSkipped && !data.hasError">📥 </span>
    </Handle>

    <Handle v-if="!isReceiver" type="source" :position="sourcePosition"/>

    <div v-if="!isSender && data.isRunning" class="spinner"/>
    <span v-else>
      {{ processLabel }}
    </span>
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
