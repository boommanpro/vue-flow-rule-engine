<!-- src/CustomControls.vue -->
<template>
  <div>
    <Panel position="bottom-center">

      <div class="container">
        <div class="left-panel tools-panel flex">
          <!-- 左侧面板内容 -->
          <InteractiveMode/>
          <Sizing/>
          <ControlButton title="Shuffle Node Positions" @click="updatePos">
            <CustomIcon name="touch" />
          </ControlButton>
          <ControlButton title="Shuffle Node Positions" @click="updatePos">
            <CustomIcon name="update" />
          </ControlButton>
          <ControlButton title="Log `toObject`" @click="logToObject">
            <CustomIcon name="log" />
          </ControlButton>
          <ControlButton title="Toggle MiniMap" @click="toggleMiniMap">
            <CustomIcon name="minimap" />
          </ControlButton>
          <ControlButton title="Reset Transform" @click="resetTransform">
            <CustomIcon name="reset" />
          </ControlButton>
        </div>

        <div class="right-panel tools-panel">
          <!-- 右侧面板内容 -->
          <button class="btn">
            <CustomIcon name="touch" />
            试运行
          </button>
        </div>
      </div>
      <mini-map v-if="miniMapShow" />
    </Panel>

  </div>
  <mini-map v-if="miniMapShow" pannable zoomable />
</template>

<script setup>
import { ControlButton, Controls } from "@vue-flow/controls";
import CustomIcon from "@/components/ruleEngine/icons/CustomIcon.vue";
import { MiniMap } from "@vue-flow/minimap";
import { ref } from "vue";
import { Panel, VueFlow, useVueFlow } from '@vue-flow/core'
import InteractiveMode from "./InteractiveMode.vue";
import Sizing from "./Sizing.vue";


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
}

.right-panel {
  width: 300px;
  /* 设置右侧面板的宽度 */
}
</style>
