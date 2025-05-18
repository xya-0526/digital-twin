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
      <span>"</span><h1 :style="{margin: '0 2rem'}">世界级水乡人居文明典范</h1><span>"</span>
    </div>
    <div :style="{ fontWeight:200,color:'rgb(151, 154, 154)', marginBottom:'1rem'}">共生、共荣、共进、共鸣、共享</div>
    <div class="main">
      <div class="but" v-for="item in 3">
        <img src="../assets/images/point.svg" alt="">
        <div>超级都市圈</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text{
  width:100%;
  height: 22rem;
  display: flex;
  font-family: "SourceHanSansCN";
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.68rem;
  color: #FFF;
  letter-spacing: 5px;
  .title{
    font-size: 2rem;
    display: flex;
    height: 25%;
  }
  span{
    color:rgb(133, 200, 159);
    font-size: 2.98rem;
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
    margin-top: 2rem;
    width: 17.8rem;
    height: 4.719rem;
    border-radius: 2.35rem;
    opacity: 1;
    border: 0.1rem solid #608671;
    background-color: rgba(33, 50, 42,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.854rem;
    margin-bottom: 2.712rem;
  }
  img{
    margin-right: 1rem;
  }
}
</style>
