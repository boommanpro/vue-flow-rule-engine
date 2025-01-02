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

const emit = defineEmits(['resetTransform', 'updatePos', 'logToObject']);

const miniMapShow = ref(true);

const resetTransform = () => {
  emit('resetTransform');
};

const updatePos = () => {
  emit('updatePos');
};

const logToObject = () => {
  emit('logToObject');
};
const toggleMiniMap = () => {
  miniMapShow.value = !miniMapShow.value;
};
</script>
