<template>
    <div class="tooltip" >
        <!-- 调试按钮 -->
        <div class="tooltip-content bg-amber-50">
            <div class="font-black ">调试</div>
        </div>
        <button class="btn-square m-1 btn btn-ghost btn-sm rounded-lg hover:bg-base-300">
            <CustomIcon name="setting" class="w-8 h-8" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomIcon from '../icons/CustomIcon.vue';

</script>

<style scoped></style>