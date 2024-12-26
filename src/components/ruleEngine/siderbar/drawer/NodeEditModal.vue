<!-- NodeEditModal.vue -->
<template>

  <div v-if="isVisible" class="modal">

    <el-drawer
        v-model="isVisible"
        :before-close="closeModal"
        :close-on-click-modal="true"
        :z-index="1000"
        :size="'60%'"
        title="I am the title"
    >
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>

    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const props = defineProps({
  node: Object,
  visible: Boolean,
});

const emit = defineEmits(['update:visible', 'updateNode']);

const isVisible = ref(props.visible);
const nodeName = ref(props.node.data.label);

watch(() => props.visible, (newVal) => {
  isVisible.value = newVal;
  nodeName.value = props.node.data.label;
});

const closeModal = () => {
  emit('update:visible', false);
};

const saveChanges = () => {
  emit('updateNode', { ...props.node, data: { ...props.node.data, label: nodeName.value } });
  closeModal();
};
</script>

<style scoped>

</style>
