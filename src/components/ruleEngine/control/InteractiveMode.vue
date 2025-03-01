<template>
  <div class="relative">
    <!-- 按钮A -->

    
     <button @click="toggleDropdown" class="btn   font-bold py-2 px-4 rounded focus:outline-none"><CustomIcon name="touch-min" /><CustomIcon name="down-row" /></button>
    <!-- 悬浮的div -->
    <div v-if="isDropdownOpen"
         class="interactive-mode absolute bottom-full left-0 bg-base-100 p-4 shadow-lg rounded-box z-10 mb-2">
      <div>
        <h4 class="p-2 font-semibold text-2xl">交互模式</h4>
        <div class="flex gap-4">
          <div class="bg-white border border-gray-200 rounded-lg p-4 text-center items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-400 w-60">
            <div class="p-4 flex items-center justify-center">
              <CustomIcon name="mouse-max" />
            </div>
            <h6 class="font-semibold text-lg">鼠标友好模式</h6>
            <p class="text-gray-500 ">鼠标左键拖动画布，滚轮缩放</p>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-4 text-center items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-400 w-60">
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
import { ref } from 'vue';
import CustomIcon from '../icons/CustomIcon.vue';
import SvgIcon from '../icons/SvgIcon.vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>

</style>