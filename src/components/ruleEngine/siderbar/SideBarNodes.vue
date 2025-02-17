<script lang="ts" setup>
import useDragAndDrop from '@/components/ruleEngine/event/useDnD.js'
import SidebarNode from "@/components/ruleEngine/core/SidebarNode.vue";
import { Edit, Delete, Download } from '@element-plus/icons-vue';
import sidebarNodesConfig from '@/components/ruleEngine/config/sidebarNodesConfig.js';

const { onDragStart } = useDragAndDrop();

const icons = {
  Edit,
  Delete,
  Download
};

defineProps<{
  filter: string
}>();
</script>

<template>
  <div v-for="section in sidebarNodesConfig" :key="section.name">
    <el-collapse-item :title="section.title" :name="section.name">
      <div class="nodes">
        <sidebar-node
            v-for="node in section.nodes"
            :key="node.name"
            :icon="icons[node.icon]"
            :name="node.name"
            :type="node.type"
            @dragstart="onDragStart($event,node.type)"
        />
      </div>
    </el-collapse-item>
  </div>
</template>

<style scoped>
.nodes {
  display: flex;
  flex-direction: column;
}
</style>
