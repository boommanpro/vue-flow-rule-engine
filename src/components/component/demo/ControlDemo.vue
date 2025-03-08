<template>
    <div class="parent-container" style="width: 500px; height: 500px;">
        <div class="main-container h-full w-full relative">
            <!-- tools-container -->
            <div class="tools-container bg-blue-200 flex-none w-[70%] absolute bottom-0" :class="{ 'w-full': !showNodesEditor }">
                <div class="tools-bar flex justify-center">
                    <div class="left-tools-bar flex space-x-2">
                        <button @click="toggleNodesEditor" class="btn btn-primary">运行</button>
                        <button class="btn btn-secondary">测试</button>
                    </div>
                    <div class="right-tools-bar">
                        <button @click="toggleDebugContainer" class="btn btn-accent">调试</button>
                    </div>
                </div>
                <!-- debug-container -->
                <div v-if="showDebugContainer" class="debug-container bg-green-200 h-[150px] w-full"></div>
            </div>

            <!-- nodes-editor-container -->
            <div v-if="showNodesEditor" class="nodes-editor-container bg-red-200 h-full w-[30%] absolute right-0 top-0"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showNodesEditor = ref(true);
const showDebugContainer = ref(true); // 默认展示 debug-container

const toggleNodesEditor = () => {
    showNodesEditor.value = !showNodesEditor.value;
};

const toggleDebugContainer = () => {
    showDebugContainer.value = !showDebugContainer.value;
};
</script>

<style scoped>
/* 这里可以添加自定义样式，如果需要的话 */
</style>