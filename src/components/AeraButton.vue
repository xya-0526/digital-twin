<template>

    <div class="butBox">
        <UniversalButton v-for="(i, index) in textArray" :key="index" @click="addActive(index)"
        :width="'25.9rem'"
        :height="'7.7rem'"
        :Font_size="'4rem'"
            :color="activeButton == index ? '#fff' : '#a5a4a4'"
            :bgColor="activeButton == index ? 'linear-gradient(180deg, #3a7c4e 0%, #29383b 100%)' : '#253334'"
            :text="i">
        </UniversalButton>
    </div>



</template>


<script setup lang="ts">
import UniversalButton from './UniversalButton.vue';
const textArray = ref(["示范区", "先行启动区", "水乡客厅"])
let activeButton = ref(0)
const addActive = (index: number) => {
    console.log(index)
    activeButton.value = index
    // 这里可以添加点击事件的逻辑
    // 比如改变按钮的样式或执行其他操作
}



</script>
<style scoped>
.butBox {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 210.9rem;
    width: 89rem;
    height: 7.7rem;
    flex-direction: row;

}
</style>