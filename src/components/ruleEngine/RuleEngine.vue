<!-- src/RuleEngine.vue -->
<template>
  <div class="relative ruleEngineWraper w-full h-full">

    <div ref="ruleEngineContainer" class=" w-full h-full" style="overflow: auto;">

      <div class="vue-flow" style="width: 4000px;height: 4000px; overflow: auto; " @drop="onDrop">

        <vue-flow v-model:nodes="store.nodes" v-model:edges="store.edges" class="basic-flow"
          :default-viewport="{ zoom: 0.8 }" :min-zoom="0.2" :max-zoom="4" :node-types="store.nodeTypes"
          @dragover="onDragOver" @dragleave="onDragLeave" :zoom-on-scroll="store.isMouseMode"
          :zoom-on-pinch="!store.isMouseMode">

          <dropzone-background />
        </vue-flow>

      </div>
    </div>
    <sidebar v-model:node="selectedNode" v-model:modal-visible="showModal" />
    <custom-controls v-model:nodes="store.nodes" />
  </div>

</template>

<script setup>
import useStore from './store';
import { onMounted, ref } from 'vue';
import { VueFlow } from "@vue-flow/core";
import '@vue-flow/controls/dist/style.css';
import '@/components/ruleEngine/global-vue-flow.css';
import CustomControls from "@/components/ruleEngine/control/CustomControls.vue";
import Sidebar from "@/components/ruleEngine/siderbar/Sidebar.vue";

import useDragAndDrop from './event/useDnD.js'
import setupRuleEngine from './event/ruleEngine.js'
import DropzoneBackground from "@/components/ruleEngine/background/DropzoneBackground.vue";


const { onDragOver, onDrop, onDragLeave, isDragOver } = useDragAndDrop()
setupRuleEngine();
const store = useStore();
// 初始化节点和边
const showModal = ref(false)

// 处理节点点击事件

// 初始化时添加一个初始化节点
onMounted(async () => {

});

const ruleEngineContainer = ref(null);

onMounted(() => {
  const container = ruleEngineContainer.value;
  if (container) {
    // 计算中间位置
    const scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2;
    const scrollTop = container.scrollHeight / 2 - container.clientHeight / 2;

    // 滚动到中间位置
    container.scrollTo({
      left: scrollLeft,
      top: scrollTop,
      behavior: 'auto', // 可选：平滑滚动
    });
  }
});

const selectedNode = ref(null);
</script>

<style>
.vue-flow {
  height: 100vh;
  position: relative;
  /* 确保子组件可以正确定位 */
  background-color: #f2f4f7;
}

.basic-flow {
  height: 100%;
}




.vue-flow aside {
  z-index: 100;
  /* 确保按钮在最上层 */
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-weight: 700;
  border-right: 1px solid #eee;
  padding: 15px 10px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, .3);
  box-shadow: 0 5px 10px #0000004d
}







.custom-controls {
  position: absolute;
  top: 10px;
  /* 距离顶部的距离 */
  right: 10px;
  /* 距离右侧的距离 */
  display: flex;
  gap: 10px;
  /* 按钮之间的间距 */
  z-index: 100;
  /* 确保按钮在最上层 */
}
</style>
