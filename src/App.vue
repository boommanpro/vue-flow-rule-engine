<script setup>

import RuleEngine from "@/components/ruleEngine/RuleEngine.vue";

import { ref, onMounted } from 'vue';

const ruleEngineContainer = ref(null);

onMounted(() => {
  const container = ruleEngineContainer.value;
  if (container) {
    // 计算中间位置
    const scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2;
    const scrollTop = container.scrollHeight / 2 - container.clientHeight / 2;

    // 滚动到中间位置
    container.scrollTo({
      left: scrollLeft,
      top: scrollTop,
      behavior: 'auto', // 可选：平滑滚动
    });
  }
});

</script>

<template>

  <div>

    <!-- <router-view></router-view> -->


    <div class=" bg-blue-400" style="width: 1000px;height: 100px;">

    </div>
    <div ref="ruleEngineContainer" style="width: 800px; height: 800px; overflow: auto;">
    <rule-engine />
  </div>
    <div class=" bg-amber-200" style="width: 1000px;height: 100px;"></div>
  </div>
</template>

<style scoped></style>
