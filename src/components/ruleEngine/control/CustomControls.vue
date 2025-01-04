<!-- src/CustomControls.vue -->
<template>
  <Controls position="top-right">
    <ControlButton title="Reset Transform" @click="resetTransform">
      <CustomIcon name="reset"/>
    </ControlButton>
    <ControlButton title="Shuffle Node Positions" @click="updatePos">
      <CustomIcon name="update"/>
    </ControlButton>
    <ControlButton title="Log `toObject`" @click="logToObject">
      <CustomIcon name="log"/>
    </ControlButton>
    <ControlButton title="Toggle MiniMap" @click="toggleMiniMap">
      <CustomIcon name="minimap"/>
    </ControlButton>
  </Controls>
  <mini-map v-if="miniMapShow" pannable zoomable/>
</template>

<script setup>
import {ControlButton, Controls} from "@vue-flow/controls";
import CustomIcon from "@/components/ruleEngine/base/CustomIcon.vue";
import {MiniMap} from "@vue-flow/minimap";
import {ref} from "vue";
import {useVueFlow} from "@vue-flow/core";

const nodes=defineModel('nodes')
const emit = defineEmits(['resetTransform', 'updatePos', 'logToObject']);

const miniMapShow = ref(true);


const { setViewport, toObject} = useVueFlow();

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
  setViewport({x: 0, y: 0, zoom: 1});
}

const toggleMiniMap = () => {
  miniMapShow.value = !miniMapShow.value;
};
</script>
