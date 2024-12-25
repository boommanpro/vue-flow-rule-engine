<script lang="ts" setup>
import useDragAndDrop from '../useDnD.js'
import {ref} from 'vue'
import BaseNode from "@/components/ruleEngine/siderbar/nodes/BaseNode.vue";
import {Search} from "@element-plus/icons-vue";

const {onDragStart} = useDragAndDrop()

const searchQuery = ref('')

</script>

<template>
  <aside>
    <el-collapse>
      <el-input :prefix-icon="Search" v-model="searchQuery" placeholder="搜索组件" type="text" class="search-input"/>
      <base-node :filter="searchQuery"/>
    </el-collapse>
  </aside>
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
