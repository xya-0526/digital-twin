<script setup>
const props = defineProps({
  data:{
    type:Object,
    default:()=>{}
  },
  width:{
    type:String,
    default:'80%'
  },
  height:{
    type:String,
    default:'80%'
  }
})
</script>

<template>
  <div class="ecologyTitle" :style="{width:props.width,height:props.height}">
   <div class="container" v-for="item in 2">
    <div class="titleBox">
      <div class="icon"></div>
       <div class="title">生态结构</div>
    </div>
   
    <div class="main">
      <div class="title1" v-for="item in 5">一心</div>
    </div>
   </div>
  </div>
   
</template>

<style scoped leng="scss">
.ecologyTitle {
  width: 100%;
  height: 100%;
  /* background-color: antiquewhite; */
  font-family: "SourceHanSansCN";
  padding: 0.3906vw;
  font-size: 0.3125vw;
  color: #fff;
  .container {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
  }

}
.titleBox{
  display: flex;
  width: 100%;
  height: 10%;
  /* justify-content: center; */
  align-items: center;
  .icon{
      width: 0.1172vw;
      height: 0.4167vh;
      background-color: rgb(244, 186, 78);
      border-radius: 50%;
      margin-right: 0.1953vw;
  }
  .title{
    width: 2.8906vw;
    height: 1.25vh;
    border-radius: 0.1758vw;
    opacity: 1;
    background: linear-gradient(90deg, #2a553a 0%, #73737300 100%);
    line-height: 0px;
    padding-left: 10px;
  }
}
.main{
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  .title1{
    width: 1.7383vw;          
    height: 2.4306vh;
    border-radius: 0.3418vw;
    opacity: 1;
    background: linear-gradient(270deg, #73737300 0%, #366543 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
