<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "世界级水乡人居文明典范"
  },
  data: {
    type: Object,
  }
})
</script>

<template>
  <div class="text">
    <div class="title">
      <span>"</span><h1 :style="{margin: '0 20px'}">
        世界级水乡人居文明典范
      </h1><span>"</span>
    </div>
    <div :style="{ fontWeight:200,color:'rgb(151, 154, 154)'}">
      共生、共荣、共进、共鸣、共享
    </div>
    <div class="main">
      <div
        v-for="item in 3"
        class="but"
      >
        <img
          src="../assets/images/point.svg"
          alt=""
        >
        <div>超级都市圈</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text{
  width:100%;
  height: 12.8889vh;
  display: flex;
  font-family: "SourceHanSansCN";
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.3789vw;
  color: #FFF;
  letter-spacing: 5px;
  .title{
    display: flex;
    height: 25%;
  }
  span{
    color:rgb(133, 200, 159);
    font-size: 1.0531vw;
  }
  .main{
    width:85%;
    height: 20%;
    /* background-color: bisque; */
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .but{
    width: 3.4766vw;
    height: 3.2639vh;
    border-radius: 23.5px;
    opacity: 1;
    border: 1px solid #608671;
    background-color: rgba(33, 50, 42,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.3906vw;
  }
  img{
    margin-right: 0.1953vw;
  }
}
</style>
