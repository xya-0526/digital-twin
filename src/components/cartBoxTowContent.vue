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
        <footer>
          <div class="bg">
            <span>{{ Math.floor(count / 10) }}</span>
          </div>
        </footer>
        <footer>
          <div class="bg">
            <span>{{ count % 10 }}</span>
          </div>
        </footer>
        <h6>个</h6>
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
  margin-bottom: 10%;
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

    span {
      font-weight: 400;
      border: 0;
      background: linear-gradient(180deg, #f7ff8d 0%, #99cfb5 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* border: 0.2rem solid transparent; */
      /* border-image: linear-gradient(180deg, #f7ff8d 0%, #99cfb5 100%) 1; */
      /* width: 4.2rem;
      height: 5.4rem; */
      width: 100%;
      height: 100%;
      font-size: 4rem;
      text-align: center;
      line-height: 5rem;
      display: block;
      /* align-items: center; */
    }

    h6 {
      align-self: flex-end;
      color: #FFFFFF;
      /* font-size: 1rem; */
      margin-left: 1rem;
      font-size: 1.6rem;
      font-weight: 200;
    }
  }
}

footer {
  border: 0px;
  width: 3.9rem;
  height: 5.1rem;
  padding: 0.2rem;
  background: linear-gradient(to bottom, #B2E3CE 0%, #383B40 100%);
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
