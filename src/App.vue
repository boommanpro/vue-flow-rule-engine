<script setup>

import RuleEngine from "@/components/ruleEngine/RuleEngine.vue";

import { ref, onMounted } from 'vue';





</script>

<template>

  <div class="h-screen">

    <!-- <router-view></router-view> -->

    <div class="w-full h-[20%] bg-red-300">
      <p class="text-center">Div 1 (20%)</p>
    </div>
      <div class=" h-[60%] w-[80%] bg-blue-300 overflow-auto">
        <rule-engine />
    </div>
    <div class="w-full h-[20%] bg-green-300">
      <p class="text-center">Div 3 (20%)</p>
    </div>
  </div>
</template>

<style scoped></style>
