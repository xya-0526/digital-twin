<template>
    <div class="Butbox">
        <UniversalButton v-for="(b, index) in buttons" :Font_size="'3.6rem'" :margin="'0 0 0 0'" :key="index"
            :text="b.text" :image="b.image" :border="'0.1rem #456766'" :width="'25.8rem'" :boxShadow="''"
            :height="'6.7rem'"
            :bgColor="activeButton == index ? 'linear-gradient(180deg, #348447 0%, #1c272d 100%)' : '#1A282B'"
            :color="activeButton == index ? '#fff' : '#a5a4a4'" @click="addActive(index)">
        </UniversalButton>
    </div>
</template>
<script setup lang="ts">
import UniversalButton from './UniversalButton.vue';
import P3 from'../assets/images/P3.png'
import P5 from'../assets/images/P5.png'
import P2 from'../assets/images/P2.png'
import P1 from'../assets/images/P1.png'
import P4 from'../assets/images/P4.png'
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
            height: "3.5rem",
            width: "3.5rem",
            src: P3,
        }
    },
    {
        text: "空间条件",
        image: {
           height: "3.5rem",
            width: "3.5rem",
            src: P5,
            alt: '',
        }

    },
    {
        text: "生态结构",
        image: {
           height: "3.5rem",
            width: "3.5rem",
            src: P2,
        }

    },
    {
        text: "土地使用",
        image: {
           height: "3.5rem",
            width: "3.5rem",
            src: P1,
        }
    },
    {
        text: "道路交通",
        image: {
           height: "3.5rem",
            width: "3.5rem",
            src: P4,
        }

    },

])





</script>
<style scoped>
.Butbox {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 154.6rem;
    height: 6.7rem;
    top: 116rem;
    left: 247.1rem;
transform: translate(-50%);
    flex-direction: row;

    span {
        padding: 0;
        margin: 0;
    }
}
</style>