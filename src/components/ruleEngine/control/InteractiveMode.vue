<template>
  <div class="relative">
    <!-- 按钮A -->
    <button @click="toggleDropdown" class="btn btn-primary">按钮A</button>

    <!-- 悬浮的div -->
    <div v-if="isDropdownOpen"
         class="interactive-mode absolute bottom-full left-0 bg-base-100 p-4 shadow-lg rounded-box z-10 mb-2">
      <div>
        <h4 class="p-2 interactive-title">交互模式</h4>
        <div class="flex gap-4">
          <div class="interactive-button">
            <div class="p-4 flex items-center justify-center">
              <CustomIcon name="mouse-max" />
            </div>
            <h6 class="interactive-sub-title">鼠标友好模式</h6>
            <p class="text-gray-500 interactive-sub-description">鼠标左键拖动画布，滚轮缩放</p>
          </div>
          <div class="interactive-button">
            <div class="p-4 flex items-center justify-center">
              <CustomIcon name="touch-max" />
            </div>
            <h6 class="interactive-sub-title">触控板友好模式</h6>
            <p class="text-gray-500 interactive-sub-description">双指同向移动拖动，双指张开捏合缩放</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CustomIcon from '../icons/CustomIcon.vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
/* 你可以在这里添加额外的样式 */
.interactive-title{
  font-family: PingFang SC, Noto Sans SC, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin: 0;
}
.interactive-button-clicked{
  background-color: var(--coz-mg-hglt, rgba(186, 192, 255, .2));
    border: 1px solid var(--coz-stroke-hglt, #4e40e5);
    border-radius: var(--default, 8px);
    cursor: pointer;
}
.interactive-button{
  background: var(--coz-mg-card, #fff);
    border: 1px solid var(--coz-stroke-plus, rgba(6, 7, 9, .15));
    border-radius: var(--default, 8px);
    box-sizing: border-box;
    padding-bottom: 20px;
    text-align: center;
    width: 220px;
}
.interactive-sub-title{
  font-family: PingFang SC, Noto Sans SC, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 0;
}
.interactive-sub-description{
  padding: 4px 12px 0;
}
</style>