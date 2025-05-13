<script setup>
const props = defineProps({
  percentage: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    default: '测试'
  },
  description: {
    type: String,
    default: '30'
  },
  gradientColor: {
    type: String
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '10px'
  },
  ortherProps: {
    type: Object,
    default: () => ({})
  }
})
const progressStyle = computed(() => {
  return {
    width: props.width,
    height: props.height,
    gradientColor: props.gradientColor,
    percentage: props.percentage,
    name: props.name,
    description: props.description,
    ...props.ortherProps
  }
})
onMounted(() => {
  const progress = document.querySelector('.el-progress-bar__outer')
  progress.style.background = 'rgba(17, 26, 27,0.04)'
  progress.style.border = '0.1px solid rgba(255,255,255,0.5)'
})
</script>

<template>
  <div class="progress-bar">
    <div class="box" :style="{ width: progressStyle.width, height: progressStyle.height }">
      <div class="name">{{ progressStyle.name }}</div>
      <div class="description">{{ description }}%</div>
    </div>
    <el-progress
      :text-inside="true"
      :style="{ width: progressStyle.width, height: progressStyle.height }"
      :stroke-width="20"
      :percentage="percentage"
      status="succes"
      :color="progressStyle.gradientColor"
      :show-text="false"
      class="progress"
    />
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  width: 70%;
  height: 50px;
  background-color: rgb(17, 26, 27, 0.4);
  .box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    color: rgb(255, 255, 255);
  }
}
</style>
