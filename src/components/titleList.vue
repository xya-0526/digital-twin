<script setup>
import { Tickets } from '@element-plus/icons-vue';
const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  list: {
    type: Array,
    default: ()=>["","","",'']
  },
  width:{
    type: String,
    default: '100%'
  },
  height:{
    type: String,
    default: '100%'
  }
})
</script>
<template>
  <div class="titleList" :style="{width:props.width,height:props.height}">
    <div class="list" v-for="item in props.list" :key="item">
    <el-icon class="icon" color="#8cd3d5"><Tickets /></el-icon>
    <div class="test">文化和旅游发展专项规划</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.titleList {
  width: 80%;
  height: 80%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .list {
    width: 8.8281vw;
    height: 2.2222vh;
    background: linear-gradient(90deg, #1e3227 0%, #73737300 100%);
    display: flex;
    justify-content: start;
    align-items: center;
    color: #fff;
    border-radius: 0.3125vw;
    .icon {
     width: 12%;
     height: 4%;
     margin-left: 0.3906vw;
    }
    .test{
      font-size: 0.3883vw;
      font-weight: 350;
      opacity: 1;
      font-family: "SourceHanSansCN";
      letter-spacing: 0.0586vw;
    }
  }
}
</style>
