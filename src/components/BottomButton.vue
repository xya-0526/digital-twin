<template>
    <div class="Butbox">
        <UniversalButton
         v-for="(b, index) in buttons"
         :margin="'0 0 0 0'"
         :key="index" 
         :text="b.text" 
         :image="b.image"
         :border="'1px solid #456766'" 
         :width="'16%'" 
         :boxShadow="''" 
         :height="'25%'" 
         :bgColor="activeButton == index ? 'linear-gradient(180deg, #348447 0%, #1c272d 100%)' : '#1A282B'"
         :color="activeButton == index ? '#fff' : '#a5a4a4'"
         @click="addActive(index)"
         >
        </UniversalButton>
    </div>
</template>
<script setup lang="ts">
import UniversalButton from './UniversalButton.vue';
let activeButton = ref(0)
const addActive = (index: number) => {
    console.log(index)
    activeButton.value = index
    // 这里可以添加点击事件的逻辑
    // 比如改变按钮的样式或执行其他操作
}
const buttons = ref([

    {
        text: "区位条件",
        image: {
            src: "../src/assets/images/P3.png",
        }
    },
    {
        text: "空间条件",
        image: {
            src: "../src/assets/images/P5.png",
            alt: '',
        }

    },
    {
        text: "生态结构",
        image: {
            src: "../src/assets/images/P2.png",
        }

    },
    {
        text: "土地使用",
        image: {
            src: "../src/assets/images/P1.png",
        }
    },
    {
        text: "道路交通",
        image: {
            src: "../src/assets/images/P4.png",
        }

    },

])





</script>
<style scoped>
.Butbox {
    position: absolute;
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 28%;
    height: 15vh;
    top: 95vh;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: row;
    span {
        padding: 0;
        margin: 0;
    }
}
</style>