<template>
<div class="Butbox">
     <div class="R"></div>
    <div class="Butbox1">
        <div class="Butbox2" style="width: 15%; height: 10%;" v-for="(button, index) in buttons">
         <span class="T"></span>
            <UniversalButton
                :margin="'0 0.5vw 0 0'"
                :justifyContent="'end'"
                :Font_size="'1.5rem'"
                :width="'100%'"
                :height="'100%'"
                :Border="'1px solid #3c5446'"
                :border_radius="'40px'"
                :key="index"
                :text="button.text"
                :image="button.image"
                :bgColor="activeButton == index ? 'linear-gradient(90deg, #1B3C2E 0%, #44A562 100%)' : '#202C2A'"
                :color="activeButton == index ? '#fff' : '#FFFFFF'"
                @click="addActive(index)"
            >
           </UniversalButton>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import UniversalButton from './UniversalButton.vue';
import { ref } from 'vue';
let activeButton = ref(0)
const addActive = (index: number) => {
    console.log(index)
    activeButton.value = index
    // 这里可以添加点击事件的逻辑
    // 比如改变按钮的样式或执行其他操作
}
const buttons=ref([
 {
        text: "一心",
        image: {
            src: "../src/assets/images/P6.png",
        }
    },
    {
        text: "一点",
        image: {
            src: "../src/assets/images/P7.png",
            alt: '',
        }

    },
    {
        text: "三元",
        image: {
            src: "../src/assets/images/P8.png",
        }

    },
    {
        text: "三区",
        image: {
            src: "../src/assets/images/P9.png",
        }
    },
    {
        text: "蓝环",
        image: {
            src: "../src/assets/images/P10.png",
        }

    },

 {
        text: "多村",
        image: {
            src: "../src/assets/images/P11.png",
        }

    },

])


</script>

<style scoped>

.Butbox{
    top: 28.5%;
left: 18%;
height: 40vh;
width: 20%;
position: absolute;
}
.Butbox1{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}
.Butbox2{
    position: relative;
}
.T{
position: absolute;
width: 30%;
height: 30%;
flex-shrink: 0;
border-radius: 10px;
background: #BCE0BF;
display: inline-block;
top: 50%;
left:0;
transform: translate(-50%, -50%);

}
.R{
border: 3px solid transparent ;
position: absolute;
left: 41%;
bottom: -20%;
width: 1px;
height: 150%;
border-image: linear-gradient(to bottom, transparent 0%, #bce9c0 50%, transparent 100%) 1;

}
</style>
