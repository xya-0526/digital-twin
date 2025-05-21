<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => { }
    default: () => { }
  },
  width: {
    type: String,
    default: '80%'
  },
  height: {
    type: String,
    default: '80%'
  }
})
</script>

<template>
  <div class="ecologyTitle" :style="{ width: props.width, height: props.height }">
    <div v-for="item in props.data" :key="item.id" class="container">
      <div class="titleBox">
        <div class="icon" />
        <div class="title">
          {{ item.title }}
        </div>
      </div>

      <div class="main">
        <div class="title2" v-for="iten in item?.space" :key="iten.id">
          <span class="title1">{{ iten.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped leng="scss">
.ecologyTitle {
  width: 100%;
  height: 100%;
  /* background-color: antiquewhite; */
  font-family: 'SourceHanSansCN';
  padding: 1.999rem;
  font-size: 1.9rem;
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

.titleBox {
  display: flex;
  width: 100%;
  height: 10%;
  /* justify-content: center; */
  align-items: center;

  .icon {
    width: 0.6rem;
    height: 0.6rem;
    background-color: rgb(244, 186, 78);
    border-radius: 50%;
    margin-right: 0.9rem;
  }

  .title {
    width: 14.799rem;
    height: 1.8rem;
    border-radius: 0.9rem;
    opacity: 1;
    background: linear-gradient(270deg, #142222 0%, #2a553a 100%);
    line-height: 0px;
    padding-left: 1rem;
    font-size: 1.8rem;
  }
}

.main {
  margin-left: 1rem;
  width: 95%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;

  .title2 {
    padding: 0.1rem;
    width: 9rem;
    height: 3.6rem;
    border-radius: var(--border-radius);
    background: linear-gradient(to right, #898888 0%, #73737300 100%);
    margin-left: -1rem;

    &:first-child {
      margin-left: 0;
    }

    .title1 {
      width: 100%;
      height: 100%;
      border-radius: 1.75rem;
      opacity: 1;
      background: linear-gradient(270deg, #0f0f0f00 20%, #366543 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 3.6rem;
    }
  }
}
</style>
