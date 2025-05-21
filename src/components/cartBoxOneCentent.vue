<template>
  <div class="box">
    <div class="box_1" v-for="i in Array">
      <div class="img">
        <img :src="i.image.src" alt="" />
      </div>
      <UniversalButton
        :color="'#fff'"
        :text="i.text"
        :width="'10rem'"
        :height="'2.8rem'"
        :border_radius="'20px'"
        :Font_size="'1.6rem'"
      ></UniversalButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import UniversalButton from './UniversalButton.vue'
import Slice1 from '@/assets/images/Slice1.svg'
import Slice2 from '@/assets/images/Slice2.svg'
import Slice3 from '@/assets/images/Slice3.svg'
const Array = [
  {
    text: '一厅三片',
    image: {
      src: Slice1,
      alt: ''
    }
  },
  {
    text: '十字双轴',
    image: {
      src: Slice2,
      alt: ''
    }
  },
  {
    text: '小镇网格',
    image: {
      src: Slice3,
      alt: ''
    }
  }
]
</script>
<style scoped lang="scss">
.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .img {
    z-index: -1;
    width: 80%;
    height: 50%;
    transform: translateY(10%);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .box_1 {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
