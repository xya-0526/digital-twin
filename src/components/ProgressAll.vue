<script setup>
const props = defineProps({
  data:{
    type: Array,
    default: () => ['','','']
  },
  colors:{
    type: Array,
    default: () => ['linear-gradient(to right,#2C5655,#69CB82)','linear-gradient(to right,#2C5655,#69CB82)','linear-gradient(to right,#2C5655,#69CB82)']
  },
  icon: String,
  progress: String,
  name: String,
  width:{
    type: String,
    default: '100%'
  },
  height:{
    type: String,
    default: '100%'
  },
  isMax:{
    type: Boolean,
    default: false
  },
  progwidth:{
    type: String,
    default: '60%'
  }
})
const allProps= computed(()=>{
  return {
    data: props.data,
    colors: props.colors,
    icon: props.icon,
    progress: props.progress,
    name: props.name,
    width: props.width,
    height: props.height,
    isMax: props.isMax,
    progwidth: props.progwidth
  }
})
</script>

<template>
  <div
    class="bardiv"
    :style="{width: allProps.width, height: allProps.height}"
  >
    <div
      v-for="i,index in allProps.data"
      :key="i"
      class="progressbars"
      :style="{width: allProps.width}"
    >
      <div
        v-if="i.icon"
        class="icons"
      >
        <radar :icon="i.icon" />
      </div>
      <div
        class="propgresss"
        :style="{width: i.icon?allProps.progwidth:allProps.width}"
      >
        <ProgressBar
          :gradient-color="allProps.colors[index]"
          :name="'销售进度'"
          :description="38.5"
          :percentage="38.5"
          :width="i.icon?allProps.progwidth:allProps.width"
          :is-max="allProps.isMax"
        />
      </div>
    </div>
  </div>
</template>

<style scoped leng="scss">
.bardiv {
  width: 100%;
  height: 100%;
  /* background-color: #333; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .progressbars {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .icons {
      width: 6.4rem;
      height: 6.4rem;
      display: flex;
      margin-right: 0.1563vw;
      margin-left: -20px;
    }
  }
}
</style>
