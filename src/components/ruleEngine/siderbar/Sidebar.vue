<script lang="ts" setup>
import useDragAndDrop from '../event/useDnD.js'
import { ref } from 'vue'
import { Search } from "@element-plus/icons-vue";
import NodeEditModal from "@/components/ruleEngine/siderbar/drawer/NodeEditModal.vue";
import SideBarNodes from "@/components/ruleEngine/siderbar/SideBarNodes.vue";

const { onDragStart } = useDragAndDrop()

const searchQuery = ref('')

const selectedNode = defineModel('node')
const modalVisible = defineModel('modalVisible')

const activeNames = ref(['inputNodes'])
</script>

<template>
  <div class="siderbar bg-white absolute top-0 bottom-0 left-0 z-1">
    <aside>
      <el-collapse v-model="activeNames">
        <el-input :prefix-icon="Search" v-model="searchQuery" placeholder="搜索组件" type="text" class="search-input" />
        <side-bar-nodes :filter="searchQuery" />
      </el-collapse>
    </aside>
    <node-edit-modal v-if="selectedNode" v-model:node="selectedNode" v-model:visible="modalVisible" />
  </div>
</template>

<style scoped>
aside {
  width: 200px;
  /* Adjust the width as needed */
  border-right: 1px solid #ccc;
  padding: 10px;
}

.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.vue-flow__node-input,
.vue-flow__node-default {
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  cursor: move;
}

.vue-flow__node-input {
  background-color: #e0f7fa;
  /* Light blue background for input nodes */
}

.vue-flow__node-default {
  background-color: #fff;
  /* White background for default nodes */
}
</style>
