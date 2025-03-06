<template>
  <div class="controls-container">
    <Panel position="bottom-center">
      <div class="container">
        <div class="left-panel tools-panel flex">
          <!-- 左侧面板内容 -->
          <InteractiveMode />
          <Sizing />
          <Thumbnail />
          <AddNodes />
        </div>

        <div class="right-panel tools-panel">
          <!-- 右侧面板内容 -->
           <Setting/>
          <button class="btn m-1 btn-sm rounded-lg  bg-green-700 text-white  hover:bg-green-800" @click="handleRun">
            <CustomIcon name="run" />
            试运行
          </button>
        </div>
      </div>
    </Panel>
  </div>
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



const edges = ref([{ id: 'e1-2', source: '1', target: '2' }])

function handleUpdate() {
}
</script>
<style scoped>
.controls-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  gap: 20px;
  /* 左右面板之间的间距 */
}

.tools-panel {
  background-color: var(--coz-bg-max);
  border: 1px solid var(--coz-stroke-plus);
  border-radius: 10px;
  box-shadow: var(--coz-shadow-small);
  padding: 0 4px;
  pointer-events: auto;
}

.left-panel {
  background-color: #ffffff;
  width: 300px;
  /* 设置左侧面板的宽度 */
  display: flex;
  align-items: center;
}

.right-panel {
  /* 设置右侧面板的宽度 */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 130px;
}


</style>