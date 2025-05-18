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
        const weekdays = [  "Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let thDay = date.getDay()
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        CurrentYM.value = `${year}.${month < 10 ? "0" + month : month}.${day < 10 ? "0" + day : day}`;
        week.value = weekdays[thDay]
        nowtime.value = `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`;
    }, 1)

}
const setActive = (value: number) => {
    activeButton.value = value
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

    border: transparent 0.15rem solid;
    order: 1;
    border-image: linear-gradient(to right, transparent, #ACBFBB) 1;
    border-top-left-radius: 2rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 1rem;
    margin-left: 3rem;
    width: 36rem;
    height: 8.1rem;
    transform: skew(45deg, 0deg);
    background: linear-gradient(to right, #1E3C2D, #1D2A30);

    p {
        transform: skew(-45deg, 0deg);
        font-size: 4.8rem;
        color: #CCCCCC;
    }
}

.but-2 {

    order: 3;
    border: transparent 0.15rem solid;
    border-image: linear-gradient(to right, transparent, #ACBFBB) 1;
    border-top-left-radius: 1rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 2rem;
    margin-right: 3rem;
    width: 36rem;
    height: 8.1rem;
    transform: skew(-45deg, 0deg);
    background: linear-gradient(to right, #1E3C2D, #1D2A30);

    p {
        transform: skew(45deg, 0deg);
        font-size: 4.8rem;
        color: #CCCCCC;
    }
}

header {
    position: relative;
    background-color: #141F25;
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

        background-color: #141F25;
        width: 100%;
        height: 100%;
        padding: 1rem;
        border-bottom-right-radius: 12rem;
        border-bottom-left-radius: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {

            background-image: linear-gradient(to bottom, #FFFCFF, #a7f6ed);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 3rem;

        }

        p:nth-child(2) {
            font-size: 7.2rem;
            margin-bottom: 1rem
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

        #week{

            font-size: 1.8rem;
        }

        #nowtime {
            font-size: 4rem;
        }
    }

    #setter {
        margin-left: 2rem;
        width: 3.6rem;
        height: 3.6rem;
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