<script setup>
const isActive = ref(1)

const buttonClick = value => {
  isActive.value = value
}
</script>

<template>
  <div class="bus">
    <button
      v-for="i in 5"
      :key="i"
      @click="buttonClick(i)"
      :class="['button', { buttonClick: isActive === i }]"
    >
      <img src="../assets/images/路径 3.png" alt="" class="icon" />
      <div class="test">目标定位</div>
    </button>
  </div>
</template>

<style scoped>
.bus {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  .button {
    width: 4.4691vw;
    height: 9.2882vh;
    border-radius: 10px;
    opacity: 1;
    border: 1px solid #82c3a1;
    background: #1c3829d6;
    box-shadow: inset 0 0 11px 0 #48a861;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .test {
    width: 2.1875vw;
    height: 2.6389vh;
    opacity: 1;
    color: #ffffff;
    font-size: 0.5469vw;
    font-weight: 400;
    font-family: 'SourceHanSansCN';
    text-align: left;
  }
  .icon {
    width: 0.7287vw;
    height: 2.6042vh;
    opacity: 1;
    /* background: #e9fdf2; */
  }
}
.buttonClick {
  background: linear-gradient(180deg, #419156 0%, #1c382900 100%) !important;
  box-shadow: inset 0 0 11px 0 #48a861 !important;
}
</style>
