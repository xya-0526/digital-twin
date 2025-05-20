<template>
  <div id="header">
    <header>
      <button
        v-for="(item, index) in titles"
        :key="index"
        :class="[index < 3 ? 'but-1' : 'but-2', activeButton == index ? 'active' : '']"
        @click="setActive(index)"
      >
        <p>{{ item }}</p>
      </button>
      <div class="title">
        <div id="box1">
          <p id="P1">长三角生态绿色一体化发展示范区</p>
          <p>水乡客厅数字孪生运营平台</p>
        </div>
      </div>
    </header>
    <section class="ST">
      <div class="time">
        <div id="nowtime">{{ nowtime }}</div>
        <div id="week">
          <div style="color: #7d848a">{{ week }}</div>
          <div>{{ CurrentYM }}</div>
        </div>
      </div>
    </section>
    <div id="setter"></div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue'
const titles = ref(['国土规划', '项目建设', '低碳能源', '道路交通', '文化旅游', '产业经济'])
let nowtime = ref('')
let CurrentYM = ref('')
let week = ref('')
let intervalId: ReturnType<typeof setInterval> | null = null
let activeButton = ref(0)
const getnewtime = (): void => {
  intervalId = setInterval(() => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let thDay = date.getDay()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    CurrentYM.value = `${year}.${month < 10 ? '0' + month : month}.${day < 10 ? '0' + day : day}`
    week.value = weekdays[thDay]
    nowtime.value = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`
  }, 1)
}
const setActive = (value: number) => {
  activeButton.value = value
}
onMounted(() => {
  getnewtime()
})

onBeforeUnmount(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>
<style scoped>
.but-1 {
  border: transparent 0.15rem solid;
  order: 1;
  border-image: linear-gradient(to right, transparent, #acbfbb) 1;
  border-top-left-radius: 2rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 1rem;
  margin-left: 3rem;
  width: 36rem;
  height: 8.1rem;
  transform: skew(45deg, 0deg);
  background: linear-gradient(to right, #1e3c2d, #1d2a30);

  p {
    transform: skew(-45deg, 0deg);
    font-size: 4.8rem;
    color: #cccccc;
  }
}

.but-2 {
  order: 3;
  border: transparent 0.15rem solid;
  border-image: linear-gradient(to right, transparent, #acbfbb) 1;
  border-top-left-radius: 1rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 2rem;
  margin-right: 3rem;
  width: 36rem;
  height: 8.1rem;
  transform: skew(-45deg, 0deg);
  background: linear-gradient(to right, #1e3c2d, #1d2a30);

  p {
    transform: skew(45deg, 0deg);
    font-size: 4.8rem;
    color: #cccccc;
  }
}

header {
  position: relative;
  background-color: #141f25;
  width: 512rem;
  height: 14.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 12rem;
  border-bottom-left-radius: 12rem;
  z-index: 1;
}

header .title {
  order: 2;
  padding: 0.2rem;
  margin-left: 2em;
  margin-right: 2em;
  width: 118.9rem;
  height: 14.5rem;
  background: linear-gradient(to bottom, transparent, rgb(129, 128, 128));
  border-bottom-right-radius: 12rem;
  border-bottom-left-radius: 12rem;

  #box1 {
    background-color: #141f25;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-bottom-right-radius: 12rem;
    border-bottom-left-radius: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    p {
      font-size: 3rem;
    }
    #P1 {
      margin-top: 1rem;
      letter-spacing: 2rem;
    }
    p:nth-child(2) {
      font-size: 7.2rem;
      /* margin-bottom: 1rem; */
      letter-spacing: 0.5rem;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(to bottom, #fffcff, #a7f6ed);
    }
  }
}

#header {
  height: 14.5rem;
  margin-bottom: 1.5rem;
  width: 512em;
  position: relative;
}

.ST {
  height: 14.5rem;
  top: 0;
  position: absolute;
  z-index: 2;
  left: 463.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .time {
    width: 25.6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    #week {
      font-size: 1.8rem;
    }

    #nowtime {
      font-size: 4rem;
      margin-right: 1rem;
    }
  }
}

#setter {
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  left: 496.1rem;
  width: 3.6rem;
  height: 3.6rem;
  background-image: url('../assets/images/SET.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
  z-index: 2;
}
#setter::after {
  left: -3.5em;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  content: '';
  display: block;
  width: 0.1rem;
  height: 4.5rem;
  background-color: #a5a4a4;
}
.active {
  background: linear-gradient(to right, #47a25c, #151c24) !important;
  font-weight: 700;
  color: #ffffff;
}
</style>
