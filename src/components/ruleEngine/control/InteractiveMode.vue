<template>
  <div class="relative flex items-center">
    <!-- 按钮A -->


    <button @click="toggleDropdown" class=" btn-ghost h-6 p-1 rounded-lg btn   font-bold   focus:outline-none">
      <CustomIcon name="touch-min" />
      <CustomIcon name="down-row" />
    </button>
    <!-- 悬浮的div -->
    <div v-if="isDropdownOpen"
      class="interactive-mode absolute bottom-full left-0 bg-base-100 p-4 shadow-lg rounded-box z-10 mb-2">
      <div>
        <h4 class="p-2 font-semibold text-2xl">交互模式</h4>
        <div class="flex gap-4">
          <div :class="[
            ' border border-gray-200 rounded-lg p-4 text-center items-center justify-center cursor-pointer w-60',
            store.isMouseMode ? 'bg-purple-100 border-purple-400' : 'hover:shadow-md'
          ]" @click="store.changeMouse(true)">
            <div class="p-4 flex items-center justify-center">
              <CustomIcon name="mouse-max" />
            </div>
            <h6 class="font-semibold text-lg">鼠标友好模式</h6>
            <p class="text-gray-500 ">鼠标左键拖动画布，滚轮缩放</p>
          </div>
          <div :class="[
            'border border-gray-200 rounded-lg p-4 text-center items-center justify-center cursor-pointer w-60',
            !store.isMouseMode ? ' bg-purple-100 border-purple-400' : 'hover:shadow-md'
          ]" @click="store.changeMouse(false)">
            <div class="p-4 flex items-center justify-center">
              <CustomIcon name="touch-max" />
            </div>
            <h6 class="font-semibold text-lg">触控板友好模式</h6>
            <p class="text-gray-500 ">双指同向移动拖动，双指张开捏合缩放</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useStore from '@/components/ruleEngine/store.ts';
import { ref } from 'vue';
import CustomIcon from '../icons/CustomIcon.vue';
import SvgIcon from '../icons/SvgIcon.vue';
const store = useStore();

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped></style>