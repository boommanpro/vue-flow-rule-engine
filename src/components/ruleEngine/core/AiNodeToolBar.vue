<template>
  <NodeToolbar :is-visible="show()" :position="Position.Top" align="end">
    <div class="tf-node-toolbar">
      <el-button link @click="runNode">
        <RunIcon/>
      </el-button>
      <el-button link @click="copyNode">
        <CopyIcon/>
      </el-button>
      <el-button link @click="deleteNode">
        <DeleteIcon/>
      </el-button>
    </div>
  </NodeToolbar>
</template>
<script setup lang="ts">
import {Position} from "@vue-flow/core";
import DeleteIcon from "@/components/ruleEngine/icons/DeleteIcon.vue";
import {NodeToolbar} from "@vue-flow/node-toolbar";
import RunIcon from "@/components/ruleEngine/icons/RunIcon.vue";
import CopyIcon from "@/components/ruleEngine/icons/CopyIcon.vue";
import { useVueFlow } from '@vue-flow/core'
import useStore  from '@/components/ruleEngine/store'

const props=defineProps<{
  id: string
}>();

const { getNodes,findNode, setNodes,removeNodes } = useVueFlow()

const runNode = (id) => {

}
const show =()=>
{
  return findNode(props.id).selected;
}

const deleteNode = () => {
  removeNodes(props.id)
}

const copyNode = () => {
  const store = useStore();
  const node = findNode(props.id)
  console.log(node)
  if (node) {
    const newNode = {
      ...node,
      id: `copy-${node.id}`,
      position: {
        x: node.position.x + 20,
        y: node.position.y + 20
      }
    }
    store.nodes.push(newNode)
  }
}
</script>
