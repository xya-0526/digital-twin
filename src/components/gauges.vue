<script setup>
const props = defineProps({
  width: {
    type: String
  },
  height: {
    type: String
  }
})
</script>

<template>
  <div
    class="gauges"
    :style="{ width: props.width, height: props.height }"
  >
    <div class="title">
      <div
        v-for="item in 2"
        :key="item"
        class="testarea"
      >
        <div class="circle" />
        <div class="text">
          数据一
        </div>
      </div>
    </div>
    <div class="main">
      <gaugeChart />
      <gaugeChart />
    </div>
  </div>
</template>

<style scoped leng="scss">
.gauges {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  .title {
    width: 80%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(255, 255, 255);
    /* margin-bottom: 2.4306vh; */
    .circle {
      width: 20px;
      height: 20px;
      background-color: rgb(244, 186, 78);
      border-radius: 50%;
      display: inline-block;
    }
    .testarea {
      width: 25%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .main {
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin-top: 2.4306vh;
  }
}
</style>
