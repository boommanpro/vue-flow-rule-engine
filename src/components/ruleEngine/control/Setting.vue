<template>
    <div class="tooltip custom-tooltip" data-tip="调试">
        <button class="btn-square m-1 btn btn-ghost btn-sm rounded-lg hover:bg-base-300">
            <CustomIcon name="setting" class="w-8 h-8" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomIcon from '../icons/CustomIcon.vue';
</script>

<style scoped>
.tooltip.custom-tooltip {
  --tt-bg: white;
  --tt-text-color: black;
}

.tooltip.custom-tooltip > .tooltip-content,
.tooltip.custom-tooltip[data-tip]::before {
  background-color: var(--tt-bg) !important;
  color: var(--tt-text-color) !important;
}

.tooltip.custom-tooltip[data-tip]::after {
  border-top-color: var(--tt-bg) !important; /* 改变箭头的颜色 */
}
</style>