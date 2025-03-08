<template>
  <div class="relative">
    <button @click="toggleMenu" class=" btn-ghost h-6 p-1 rounded-lg btn   font-bold   focus:outline-none">
      <CustomIcon name="thumbnail-min" />
    </button>
    <div v-if="showMenu" class="absolute bottom-full z-10 mb-2">
      <div class="flex w-full h-full rounded-lg bg-white border border-gray-900/10 overflow-hidden shadow-md p-2"
        style="width: 200px;height: 120px; margin-bottom: 9px;margin-right: 9px;z-index: -1;">
        <MiniMap mask-border-radius="10" width="182" height="102" zoomable pannable />
      </div>
    </div>
  </div>
</template>

<script setup>
import { MiniMap } from '@vue-flow/minimap';
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
  white-space: nowrap;
  /* 防止文本换行 */
}

li:hover {
  background-color: #f0f0f0;
}
</style>