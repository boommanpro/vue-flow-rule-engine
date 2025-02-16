<template>
  <NodeToolbar :is-visible="true" :position="Position.Top">
    <div class="tf-node-toolbar">
      <el-button link>
        <RunIcon/>
      </el-button>
      <el-button link>
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

const deleteNode = (id) => {
  console.log(id)
}
</script>
