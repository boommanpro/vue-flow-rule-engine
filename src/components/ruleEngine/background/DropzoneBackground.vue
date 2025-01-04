<script lang="ts" setup>
import { Background } from '@vue-flow/background'
</script>

<template>
  <div class="dropzone-background" :style="{
          transition: 'background-color 0.2s ease',
        }">
    <Background :size="2" :gap="20" pattern-color="#BDBDBD" />

    <div class="overlay">
      <slot />
    </div>
  </div>
</template>
