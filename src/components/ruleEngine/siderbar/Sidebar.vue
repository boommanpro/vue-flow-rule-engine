<script lang="ts" setup>
import useDragAndDrop from '../event/useDnD.js'
import {ref} from 'vue'
import {Search} from "@element-plus/icons-vue";
import NodeEditModal from "@/components/ruleEngine/siderbar/drawer/NodeEditModal.vue";
import FilterNodes from "@/components/ruleEngine/siderbar/FilterNodes.vue";
import InputNodes from "@/components/ruleEngine/siderbar/InputNodes.vue";
import MappingNodes from "@/components/ruleEngine/siderbar/MappingNodes.vue";
import ProcessNodes from "@/components/ruleEngine/siderbar/ProcessNodes.vue";

const {onDragStart} = useDragAndDrop()

const searchQuery = ref('')

const selectedNode = defineModel('node')
const modalVisible = defineModel('modalVisible')

const activeNames = ref(['inputNodes'])
</script>

<template>
  <aside>
    <el-collapse v-model="activeNames">
      <el-input :prefix-icon="Search" v-model="searchQuery" placeholder="搜索组件" type="text" class="search-input"/>
      <input-nodes :filter="searchQuery"/>
      <filter-nodes :filter="searchQuery"/>
      <mapping-nodes :filter="searchQuery"/>
      <process-nodes :filter="searchQuery"/>
    </el-collapse>
  </aside>
  <node-edit-modal v-if="selectedNode" v-model:node="selectedNode" v-model:visible="modalVisible"/>
</template>

<style scoped>
aside {
  width: 200px; /* Adjust the width as needed */
  border-right: 1px solid #ccc;
  padding: 10px;
}

.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.vue-flow__node-input, .vue-flow__node-default {
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: move;
}

.vue-flow__node-input {
  background-color: #e0f7fa; /* Light blue background for input nodes */
}

.vue-flow__node-default {
  background-color: #fff; /* White background for default nodes */
}
</style>
