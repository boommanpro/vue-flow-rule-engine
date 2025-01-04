<!-- NodeEditModal.vue -->
<template>

  <div v-if="visible" class="modal">

    <el-drawer
        v-model="visible"
        :close-on-click-modal="true"
        :z-index="1000"
        :size="'60%'"
        title="I am the title"
    >
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      </el-tabs>

    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const visible = defineModel('visible')
const node = defineModel('node')

</script>

<style scoped>

</style>
