<template>
    <div class="butBox">
        <UniversalButton v-for="(i, index) in textArray" :key="index" @click="addActive(index)"
            :color="activeButton == index ? '#fff' : '#a5a4a4'"
            :bgColor="activeButton == index ? 'linear-gradient(180deg, #3a7c4e 0%, #29383b 100%)' : '#253334'"
            :text="i"
            :width="'28%'"
            :height="'20%'">
        </UniversalButton>
    </div>



</template>


<script setup lang="ts">
import { bg } from 'element-plus/es/locale';
import UniversalButton from './UniversalButton.vue';
const textArray = ["示范区", "先行启动区", "水乡客厅"]
let activeButton = ref(0)
const addActive = (index: number) => {
    console.log(index)
    activeButton.value = index
    // 这里可以添加点击事件的逻辑
    // 比如改变按钮的样式或执行其他操作
}

defineProps({
    //   width: {
    //      type: String,
    //      default: ''
    //   },
    //   height: {
    //      type: String,
    //      default: ''
    //   }
})


</script>
<style>
.butBox {
    position: absolute;
    margin-top: 1vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18%;
    height: 20%;
    flex-direction: row;
}
</style>