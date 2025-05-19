<script setup>
import P9 from '@/assets/images/P9.png'
import P16 from '@/assets/images/P16.svg'
import P17 from '@/assets/images/P17.svg'

const props = defineProps({
  data: {
    type: Object,
  }
})
const icon =ref( [P16,P9,P17])
</script>

<template>
  <div class="text">
    <div class="title">
      <span>"</span><h1 :style="{margin: '0 2rem'}">{{data?.slogan}}</h1><span>"</span>
    </div>
    <div :style="{ fontWeight:200,color:'rgb(151, 154, 154)', marginBottom:'3.5rem',marginTop:'2rem'}">{{data?.smallSlogan}}</div>
    <div class="main">
      <div
        v-for="item,index in data?.peculiarity"
        :key="item.id"
        class="but"
      >
        <img
          :src="icon[index]"
          alt=""
        >
        <div class="test">{{item.test}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text{
  padding-bottom: 2.8rem;
  padding-top: 1.4rem;
  width: 100%;
  height: 100%;
  display: flex;
  font-family: "SourceHanSansCN";
  align-items: center;
  flex-direction: column;
  justify-content:center;
  font-size: 1.68rem;
  color: #FFF;
  letter-spacing: 0.5rem;
  .title{
    font-size:1.6rem;
    display: flex;
    height: 25%;
    letter-spacing: 1em;
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
    &::after {
    content: '';
    position: absolute;
    inset: 0.01rem;
    border-radius: 2.35rem;
    border: 0.25rem solidrgba(26, 40, 40, 0.85);
    box-shadow:
      inset -0.1rem -0.1rem 1rem rgba(68, 118, 85, 0.85),
      inset 0.1rem 0.1rem 1.5rem rgba(68, 118, 85, 0.85);
    }
  }
  img{
    margin-right: 1rem;
    width: 2.192rem;
    height:  1.854rem;
  }
}
</style>
