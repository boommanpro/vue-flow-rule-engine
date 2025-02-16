<script setup>
import {computed, toRef} from 'vue'
import {Handle, Position, useHandleConnections} from '@vue-flow/core'
import {NodeToolbar} from "@vue-flow/node-toolbar";
import RunIcon from "@/components/ruleEngine/icons/RunIcon.vue";
import CopyIcon from "@/components/ruleEngine/icons/CopyIcon.vue";
import DeleteIcon from "@/components/ruleEngine/icons/DeleteIcon.vue";
import DefinedParameterItem from "@/components/ruleEngine/core/base/DefinedParameterItem.vue";

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


const processLabel = computed(() => {
  if (props.data.hasError) {
    return '❌'
  }
  return '🏠'
})

const deleteNode = (id) => {
  // 删除节点
  // ...
  console.log(id)
}

const node = {
  id: '执行节点',
  type: 'process',
  deletable: false,
  params: []
}
let paramIndexCounter = 0;

const addParam = () => {
  node.params.push({name: '', type: 'String', index: paramIndexCounter.toString()});
  paramIndexCounter++;

}

</script>

<template>
  <div class="process-node">

    <NodeToolbar :is-visible="true" :position="Position.Top">
      <div class="tf-node-toolbar">
        <el-button link>
          <RunIcon/>
        </el-button>

        <el-button link>
          <CopyIcon/>
        </el-button>
        <el-button link @click="deleteNode(data)">
          <DeleteIcon/>
        </el-button>
      </div>
    </NodeToolbar>

    <Handle v-if="!isSender" type="target" :position="targetPosition">
      <span
          v-if="!data.isRunning && !data.isFinished && !data.isCancelled && !data.isSkipped && !data.hasError">📥 </span>
    </Handle>

    <Handle type="source" :position="sourcePosition"/>

    <div class="node">
      <h3>{{ node.id }}</h3>
      <defined-parameter-item/>

    </div>

    <span>
      {{ processLabel }}
    </span>
  </div>
</template>


<style scoped>


</style>
