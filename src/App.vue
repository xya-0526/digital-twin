<script setup>
import { onMounted, onUnmounted } from 'vue'

// 处理窗口大小变化时的缩放
const handleResize = () => {
  const app = document.querySelector('.screen-container')
  if (!(app instanceof HTMLElement)) return

  const windowWidth = document.documentElement.clientWidth
  const windowHeight = document.documentElement.clientHeight
  const scale = Math.min(windowWidth / 5120, windowHeight / 1440)

  app.style.transform = `translate(-50%, -50%) scale(${scale})`
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="screen-container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/rem.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
