<template>
    <div class="relative">
      <button class="btn btn-sm m-1 rounded-lg" @click="toggleMenu" >
        {{ value }}%
        <CustomIcon name="down-row"/>
      </button>
      <div v-if="showMenu" class="absolute bottom-full left-0 bg-base-100 p-4 shadow-lg rounded-box z-10 mb-2">
        <ul class="text-sm text-gray-800">
          <li @click="handleClick('-10')">缩小</li>
          <li @click="handleClick('+10')">放大</li>
          <li @click="handleClick('75')">自适应</li>
          <div class="divider my-2"></div>
          <li @click="handleClick('50')">缩放到 50%</li>
          <li @click="handleClick('100')">缩放到 100%</li>
          <li @click="handleClick('150')">缩放到 150%</li>
          <li @click="handleClick('200')">缩放到 200%</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
import CustomIcon from '../icons/CustomIcon.vue';
  
  const props = defineProps({
    modelValue: {
      type: Number,
      default: 100
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const showMenu = ref(false);
  const value = ref(props.modelValue);
  
  watch(() => props.modelValue, (newValue) => {
    value.value = newValue;
  });
  
  function toggleMenu() {
    showMenu.value = !showMenu.value;
  }
  
  function handleClick(option) {
    console.log(`Clicked: ${option}`);
  
    let newValue = value.value;
  
    switch (option) {
      case '-10':
        newValue = Math.max(0, parseInt(newValue) - 10);
        break;
      case '+10':
        newValue = Math.min(200, parseInt(newValue) + 10);
        break;
      default:
        newValue = option;
        break;
    }
  
    value.value = newValue;
    emit('update:modelValue', newValue);
    showMenu.value = false;
  }
  </script>
  
  <style scoped>
  li {
    cursor: pointer;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    white-space: nowrap; /* 防止文本换行 */
  }
  
  li:hover {
    background-color: #f0f0f0;
  }
  </style>