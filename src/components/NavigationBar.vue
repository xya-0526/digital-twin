<template>
    <div id="header">
        <header>
            <button v-for="(item, index) in titles" :key="index"
                :class="[index < 3 ? 'but-1' : 'but-2', activeButton == index ? 'active' : '']"
                @click="setActive(index)">
                <p>{{ item }}</p>
            </button>
            <div class="title">
                <div id="box1">
                    <p>长 三 角 生 态 绿 色 一 体 化 发 展 示 范 区</p>
                    <p>水乡客厅数字孪生运营平台</p>
                </div>
            </div>
        </header>
        <section class="ST">
            <div class="time">
                <div id="nowtime">{{ nowtime }}</div>
                <div id="week">
                    <div>{{ week }}</div>
                    <div>{{ CurrentYM }}</div>
                </div>
            </div>
            <div id="setter"></div>
        </section>
    </div>
</template>
<script setup lang="ts">

import { onMounted, ref, onBeforeUnmount } from 'vue';
const titles = ref(["国土规划", "国土规划", "国土规划", "国土规划", "国土规划", "国土规划"])
let nowtime = ref(null);
let CurrentYM = ref(null)
let week = ref(null)
let intervalId: ReturnType<typeof setInterval> | null = null;
let activeButton = ref(0)
const getnewtime = (): void => {
    intervalId = setInterval(() => {
        const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let thDay = date.getDay()
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        CurrentYM.value = `${year}.${month < 10 ? "0" + month : month}.${day < 10 ? "0" + day : day}`;
        week.value = weekdays[thDay - 1]
        nowtime.value = `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`;
    }, 1)

}
const setActive = (value: number) => {
    activeButton.value = value
    console.log(activeButton.value)
}
onMounted(() => {
    getnewtime();
})

onBeforeUnmount(() => {
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
})
</script>
<style scoped>
.but-1 {
    border: transparent 1.5px solid;
    order: 1;
    border-image: linear-gradient(to right, transparent, #ACBFBB) 1;
    border-top-left-radius: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 10px;
    margin-left: 1vw;
    width: 6vw;
    height: 6vh;
    transform: skew(45deg, 0deg);
    background: linear-gradient(to right, #1E3C2D, #1D2A30);

    p {
        transform: skew(-45deg, 0deg);
        font-size: 3rem;
        color: #CCCCCC;
    }
}

.but-2 {
    order: 3;
    border: transparent 1.5px solid;
    border-image: linear-gradient(to right, transparent, #ACBFBB) 1;
    border-top-left-radius: 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 20px;
    margin-right: 1vw;
    width: 6vw;
    height: 6vh;
    transform: skew(-45deg, 0deg);
    background: linear-gradient(to right, #1E3C2D, #1D2A30);

    p {
        transform: skew(45deg, 0deg);
        font-size: 3rem;
        color: #CCCCCC;
    }
}

header {
    position: relative;
    background-color: #141F25;
    width: 100%;
    height: 10.0694vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 120px;
    border-bottom-left-radius: 120px;
    z-index: 1;
}

header .title {
    order: 2;
    padding: 2px;
    margin-left: 1vw;
    margin-right: 1vw;
    width: 21vw;
    height: 10.0694vh;
    background: linear-gradient(to bottom, transparent, rgb(129, 128, 128));
    border-bottom-right-radius: 120px;
    border-bottom-left-radius: 120px;

    #box1 {
        background-color: #141F25;
        width: 100%;
        height: 100%;
        padding:1vh;
        border-bottom-right-radius: 120px;
        border-bottom-left-radius: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
           
            background-image: linear-gradient(to bottom, #FFFCFF, #a7f6ed);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 2.5rem;
          
        }

        p:nth-child(2) {
            font-size: 4.5rem;
            margin-bottom: 1vh;
          
        }
    }
}


#header {
    height: 10.0694vh;
    margin-bottom: 1.7361vh;
    width: 100%;
    /* height: 5vh; */
    position: relative;
}

.ST {
    position: absolute;
    top: 3vh;
    z-index: 2;
    left: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .time {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #ffffff;

        #week {

            font-size: 1.5rem;

        }

        #nowtime {
            font-size: 3.5rem;
        }
    }

    #setter {
        margin-left: 1vw;
        width: 50px;
        height: 50px;
        background-image: url("../assets/images/SET.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        align-self: center;
    }
}

.active {
    background: linear-gradient(to right, #47A25C, #151C24) !important;
}
</style>