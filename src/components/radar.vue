<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="radarCarts">
    <span class="item" />
    <img
      :src="props.icon"
      alt=""
    >
    <span class="mask">86.5%</span>
  </div>
</template>

<style scoped leng="scss">
.radarCarts {
  position: relative;
  background: transparent;
  background: linear-gradient(rgba(26, 40, 40, 0.85));

  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 0.1px solid rgba(76, 96, 87, 0.85);
  /* box-shadow: 25px 25px 75px rgba(160, 163, 164, 0.75); */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &::after {
    content: '';
    /* z-index: 100; */
    position: absolute;
    inset: 3.5px;
    border-radius: 50%;
    border: 2.5px solidrgba(26, 40, 40, 0.85);
    /* box-shadow: inset -5px -5px 25px rgba(0,0,0,0.75); */
    box-shadow:
      inset -1px -1px 10px rgba(68, 118, 85, 0.85),
      inset 1px 1px 15px rgba(68, 118, 85, 0.85);
  }
  .item {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    /* border-top: 1px dashed #141414; */
    animation: rotate 2s linear infinite;
  }
}
</style>
