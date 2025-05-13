<script setup></script>

<template>
  <div class="radarCarts">
    <span class="item"></span>
    <span>1111</span>
    <span class="mask">86.5%</span>
  </div>
</template>

<style scoped leng="scss">
.radarCarts {
  position: relative;
  background: transparent;
  background: linear-gradient(rgba(160, 163, 164, 0.75));

  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 0.1px solid rgb(160, 163, 164);
  box-shadow: 25px 25px 75px rgba(160, 163, 164, 0.75);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    border: 2.5px dotted rgba(160, 163, 164, 0.75);
    /*  */
  }
  &::after {
    content: '';
    /* z-index: 100; */
    position: absolute;
    inset: 11px;
    border-radius: 50%;
    border: 2.5px solid rgba(160, 163, 164, 0.75);
    /* box-shadow: inset -5px -5px 25px rgba(0,0,0,0.75); */
    box-shadow:
      inset -5px -5px 25px rgba(160, 163, 164, 0.75),
      inset 5px 5px 35px rgba(160, 163, 164, 0.75);
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
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-origin: top left;
      background-color: rgb(144, 202, 117);
      transform: rotate(-55deg);
      animation: rotate 5s linear infinite;
      filter: blur(30px) drop-shadow(20px 20px 10px #faf7f7);
    }
  }
  .mask {
    position: absolute;
    z-index: 99;
    bottom: 0;
    width: 50%;
    height: 30%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(rgba(160, 163, 164,0.75)); */
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
