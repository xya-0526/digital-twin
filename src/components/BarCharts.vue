<template>
  <EChart :option="progressOption" :theme="theme" :width="width" :height="height" />
</template>

<script setup>
import EChart from './echart.vue'
import { computed,defineProps } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true,
    validator: value => value?.every(item => item.name && item.value)
  },
  title: {
    type: String,
    default: ''
  },
  xAxisName: {
    type: String,
    default: ''
  },
  yAxisName: {
    type: String,
    default: ''
  },
  theme: {
    type: String,
    default: 'light'
  },
  color: {
    type: String,
    default: '#5470c6'
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '300px'
  },
  maxValue: {
    type: Number,
    default: 500 // 进度条最大值，默认为100
  },
  itemGap: { // 新增间距控制属性
    type: Number,
    default: 40, // 默认间距20px
  }
})

const progressOption = computed(() => ({
  title: {
    text: props.title,
    left: 'center',
    textStyle: {
      fontSize: 16,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: ({ name, value }) => 
      `${name}: ${((value / props.maxValue) * 100).toFixed(1)}%`
  },
  grid: {
    left: '15%',
    right: '15%',
    top: '20%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    max: props.maxValue,
    type: 'value',
    show: false
  },
  yAxis: {
    type: 'category',
    data: props.data?.map(item => item.name),
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'transparent',
        width: props.itemGap // 正确的位置应该在这里
      }
    }
  },
  series: [
    {
      name: '进度',
      type: 'bar',
      data: props.data?.map(item => ({
        value: item.value,
        name: item.name,
        itemStyle: { color: item.color || props.color }
      })),
      barWidth: '50%', // 改为固定像素值
      itemStyle: {
        color: params => params.data.itemStyle.color,
        borderRadius: [10, 10, 10, 10]
      },
      label: {
        show: true,
        position: ['0%', '-50%'],
        formatter: ({ name, value }) => {
          const percent = ((value / props.maxValue) * 100).toFixed(1)
          return `{name|${name}}{percent|${percent}%}`
        },
        rich: {
          name: {
            fontSize: 14,
            align: 'left',
            width: '50%',
            padding: [0, 0, 0, 10]
          },
          percent: {
            fontSize: 14,
            align: 'right',
            width: '50%',
            padding: [0, 10, 0, 0]
          }
        }
      },
      animationDuration: 1500
    },
    {
      type: 'bar',
      barWidth: '50%',
      barGap: '-100%',
      data: props.data?.map(() => props.maxValue),
      itemStyle: {
        color: '#f5f5f5',
        borderRadius: [10, 10, 10, 10]
      },
      silent: true,
      z: -1
    }
  ]
}))

</script>