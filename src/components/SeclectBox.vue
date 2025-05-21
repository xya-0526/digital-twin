<template>
  <div class="checkBox">
    <div id="box" v-for="i in selectArray">
      <input type="checkbox" :value="i" name="" /><span>{{ i }}</span>
    </div>
    <UniversalButton
      text="底图"
      :bgColor="'#1C3829D6'"
      :width="'100%'"
      :height="'5.6rem'"
      :border_radius="'0.996rem'"
      :Font_size="'3rem'"
      :Border="'0px'"
      :boxShadow="'inset 0 0 1.3rem 0 #64D195F0'"
    ></UniversalButton>
  </div>
</template>
<script setup lang="ts">
import UniversalButton from './UniversalButton.vue'

const selectArray = ['显示行政区划', '2413', '660', '主要交通路网', '36.6边界', '主要设施用地']
</script>
.checkBox {
    border: 0.1rem solid #456655;
    border-radius: 0.8rem;
    padding-top: 2.6rem;
    color: rgb(202, 200, 200);
    width: 25.9rem;
    height: 37.7rem;
    background: #142222;
    right: 130rem;
    top: 85rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    #box {
        line-height: 2.4rem;

        span {
            height: 2.4rem;
            text-align: center;
            line-height: 2.4rem;
        }

        font-size:2.4rem;
        display: flex;
        width: 100%;
        height: 2.4rem;
    }

    #box :last-child {
        margin-bottom: 3.38rem;
    }

    input[type="checkbox"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin-right: 1rem;
        margin-left: 3.6rem;
        width: 2.4rem;
        height: 2.4rem;
        background-color: transparent;
        border: #58896CFF 0.1rem solid;
    }

    input[type="checkbox"]:checked:before {
        display: flex;
        justify-content: center;
        align-items: center;
        content: '\2713';
        color: white;
        font-size: 1.4rem;
    }

}
</style>