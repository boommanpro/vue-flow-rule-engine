<template>
  <div class="tools-container  absolute flex-none w-[75%]  bottom-0 p-2"  :class="{ 'w-full': !showNodesEditor }"
    style="z-index: 10;">
    <div class="tools-bar flex justify-center mb-10" style="z-index: 10;">
      <div class="left-tools-bar flex items-center bg-white rounded-lg pl-0.5 pr-0.5 mr-4">
        <InteractiveMode />
        <Sizing />
        <AddNotes />
        <OptimizedLayout />
        <Thumbnail />
        <div class="vertical-divider"></div>
        <button @click="toggleNodesEditor" class="btn m-1 pl-4 btn-sm rounded-lg bg-indigo-400 text-white">
          <CustomIcon name="add" />
          添加节点
        </button>
      </div>
      <div class="right-tools-bar items-center bg-white rounded-lg pl-0.5 pr-0.5">
        <Setting />
        <button class="btn m-1 pl-4 btn-sm rounded-lg bg-green-700 text-white hover:bg-green-800"
          @click="toggleDebugContainer">
          <CustomIcon name="run" />
          试运行
        </button>
        <button class="btn m-1 pl-4 btn-sm rounded-lg bg-green-700 text-white hover:bg-green-800"
          @click="consoleLog">
          <CustomIcon name="run" />
          控制台打印
        </button>
      </div>
    </div>
    <!-- debug-container -->
    <div v-if="showDebugContainer" class="debug-container bg-green-200 h-[150px] w-full " style="z-index: 10;"></div>
  </div>

  <!-- nodes-editor-container -->
  <div v-if="showNodesEditor" class="nodes-editor-container absolute  bg-red-200 h-[90%] w-[25%] right-2  bottom-2" 
    style="z-index: 10;width: calc(25% - 0.5rem);"></div>
</template>

<script setup>
import { ControlButton, Controls } from "@vue-flow/controls";
import CustomIcon from "@/components/ruleEngine/icons/CustomIcon.vue";
import { MiniMap } from "@vue-flow/minimap";
import { ref } from "vue";
import { Panel, VueFlow, useVueFlow } from '@vue-flow/core'
import InteractiveMode from "./InteractiveMode.vue";
import Sizing from "./Sizing.vue";
import Thumbnail from "./Thumbnail.vue";
import AddNodes from "./AddNodes.vue";
import Setting from "./Setting.vue";
import OptimizedLayout from "./OptimizedLayout.vue";
import AddNotes from "./AddNotes.vue";
import useStore from '@/components/ruleEngine/store.ts';
const store = useStore();

const nodes = defineModel('nodes')
const emit = defineEmits(['resetTransform', 'updatePos', 'logToObject']);

const miniMapShow = ref(true);


const { setViewport, toObject } = useVueFlow();

function updatePos() {
  nodes.value = nodes.value.map((node) => {
    return {
      ...node,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
    };
  });
}

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject() {
  console.log(toObject());
}

/**
 * Resets the current viewport transformation (zoom & pan)
 */
function resetTransform() {
  setViewport({ x: 0, y: 0, zoom: 1 });
}

const toggleMiniMap = () => {
  miniMapShow.value = !miniMapShow.value;
};

const { updateNode } = useVueFlow()

const bgColor = ref('#eeeeee')

const label = ref('Node 1')


const showNodesEditor = ref(true);
const showDebugContainer = ref(true); // 默认展示 debug-container

const toggleNodesEditor = () => {
  showNodesEditor.value = !showNodesEditor.value;
};

const toggleDebugContainer = () => {
  showDebugContainer.value = !showDebugContainer.value;
};


const consoleLog = () => {
  console.log(store.data)
};

const edges = ref([{ id: 'e1-2', source: '1', target: '2' }])

function handleUpdate() {
}
</script>
<style scoped>
.vertical-divider {
  width: 1px;
  height: 16px;
  /* 根据需要调整高度 */
  background-color: #ccc;
  /* 分隔线的颜色 */
  margin: 0 8px;
  /* 调整与两侧元素的距离 */
}
</style>