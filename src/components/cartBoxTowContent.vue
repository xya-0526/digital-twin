<template>
  <div class="box">
    <div class="img">
      <div>
        <img :src="image.src" alt="" />
      </div>
      <div>
        <img src="../assets/images/Slice 6.png" alt="" />
      </div>
    </div>
    <div class="text">
      <p>{{ text }}</p>
      <div id="count">
        <div class="num">
          <span>{{ Math.floor(count / 10) }}</span>
        </div>
        <div class="num">
          <span>{{ count % 10 }}</span>
        </div>
        <div class="unit">个</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '默认文本'
  },
  image: {
    type: Object,
    default: () => ({
      src: '',
      alt: ''
    })
  },
  count: {
    type: Number,
    default: 0
  }
})
</script>
<style scoped>
.box {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 30rem;
  height: 100%;
}

.img {
  margin-bottom: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 12.6rem;
    height: 10.4rem; */

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }
  }

  div:nth-child(1) {
    transform: translateY(7.1rem);
    width: 5.4rem;
    height: 6.1rem;
  }

  div:nth-child(2) {
    /* transform: translateY(0); */
    width: 12.6rem;
    height: 10.4rem;
  }
}

.text {
  margin-left: 5.5rem;
  transform: translateX(-20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  /* font-size: 2rem; */

  p {
    width: 12rem;
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 6%;
    margin-left: 1%;
  }

  #count {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1rem;
    color: #ffffff;
    margin-bottom: -0.5rem;
    margin-top: 0.3rem;
    .num {
      width: 4.3rem;
      height: 5.5rem;
      font-size: 4rem;
      background-color: #fff;
      border: 0.3rem solid transparent;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      background-image:
        linear-gradient(#142222, #142222),
        linear-gradient(to top, rgb(44, 86, 85), rgb(105, 203, 130));
      background-clip: padding-box, border-box;
      /* 关键属性 */
      background-origin: border-box;
      /* 背景起点从边框开始 */
      border-radius: 1rem;
      text-align: center;
      span {
        background: linear-gradient(180deg, #f7ff8d 0%, #99cfb5 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        width: 100%;
        height: 100%;
        font-weight: bold;
      }
    }
    .unit {
      font-size: 1.6rem;
      align-self: end;
    }
  }
}

footer {
  border: 0px;
  width: 3.9rem;
  height: 5.1rem;
  padding: 0.2rem;
  background: linear-gradient(to bottom, #b2e3ce 0%, #383b40 100%);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg {
  border: 0px;
  border-radius: 4px;
  background-color: #142222;
  width: 100%;
  height: 100%;
}
</style>
