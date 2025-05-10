<template>
  <div ref="chartRef" :style="{ width, height }" />
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '40%'
  },
  height: {
    type: String,
    default: '40%'
  },
  option: {
    type: Object,
    required: true
  },
  theme: {
    type: String,
    default: 'light'
  }
})

const chartRef = ref(null)
let chartInstance = null

const initChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value, props.theme)
    chartInstance.setOption(props.option)
  }
}

const resizeChart = () => {
  chartInstance?.resize()
}

onMounted(() => {
  initChart()
  window.addEventListener('resize', resizeChart)
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
  window.removeEventListener('resize', resizeChart)
})

watch(
  () => props.option,
  newOption => {
    chartInstance?.setOption(newOption, true)
  },
  { deep: true }
)
</script>
