<!-- src/CustomControls.vue -->
<template>
    <Controls position="top-right">
      <ControlButton title="Reset Transform" @click="resetTransform">
        <Icon name="reset"/>
      </ControlButton>
      <ControlButton title="Shuffle Node Positions" @click="updatePos">
        <Icon name="update"/>
      </ControlButton>
      <ControlButton title="Log `toObject`" @click="logToObject">
        <Icon name="log"/>
      </ControlButton>
    </Controls>
</template>

<script setup>
import {Panel} from '@vue-flow/core'
import {ControlButton, Controls} from "@vue-flow/controls";
import Icon from "@/Icon.vue";

const emit = defineEmits(['resetTransform', 'updatePos', 'logToObject']);

const resetTransform = () => {
  emit('resetTransform');
};

const updatePos = () => {
  emit('updatePos');
};

const logToObject = () => {
  emit('logToObject');
};
</script>
