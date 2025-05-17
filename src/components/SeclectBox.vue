<template>
    <div class="checkBox">
        <div id="box" v-for="i in selectArray">
            <input type="checkbox" :value="i" name=""><span>{{ i }}</span>
        </div>
        <UniversalButton text="底图" :bgColor="'#1C3829D6'" :width="'100%'" :height="'15%'" :border_radius="'10px'"
            :Border="'0px'" :boxShadow="'inset 0 0 13px 0 #64D195F0'"></UniversalButton>
    </div>

</template>
<script setup lang="ts">
import UniversalButton from './UniversalButton.vue';


const selectArray = ['显示行政区划', '2413', '660', '主要交通路网', '36.6边界', '主要设施用地',]
</script>
<style scoped>
.checkBox {
    color: rgb(202, 200, 200);
    padding-top: 0.3%;
    width: 5.5%;
    height: 25.5vh;
    background: #142222;
    left: 68%;
    top: 72.5%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 1.8rem;
    #box {
        width: 85%;
        height: 10%;
    }

    input[type="checkbox"] {
          -webkit-appearance: none;
  -moz-appearance: none;
        margin-left: 5%;
        margin-right: 5%;
        appearance: none;
        width: 10%;
        height: 65%;
        background-color: transparent;
        border: #58896CFF 1px solid;
    }
input[type="checkbox"]:checked:before {
    display: flex;
    justify-content: center;
    align-items: center;
  content: '\2713';
  color: white;
  font-size: 14px;
}

}
</style>