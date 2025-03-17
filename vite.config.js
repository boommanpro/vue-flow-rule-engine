import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vite.dev/config/
export default defineConfig({
  base: './', // 设置基础路径为 './' 表示相对路径
  plugins: [
    vue(),
    vueDevTools(),
    // vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/styles/variables.scss";`
  //     }
  //   }
  // }
})
