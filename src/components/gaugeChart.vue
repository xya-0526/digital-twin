<script setup>
import icon from '@/assets/images/image.png'

const props = defineProps({
  // 尺寸配置
  width: {
    type: String,
    default: '195px'
  },
  height: {
    type: String,
    default: '195.98px'
  },
  seriesData: {
    type: Object,
    required: true,
  },

  // 样式配置
  theme: {
    type: String,
    default: 'light'
  },
  colors: {
    type: Array,
    default: () => ['#5470c6', '#91cc75', '#fac858', '#ee6666']
  },

  // 功能配置
  title: String,
  showLegend: {
    type: Boolean,
    default: true
  },
  horizontal: {
    type: Boolean,
    default: false
  },
  stack: {
    type: [Boolean, String],
    default: false
  }
})
const Echartoption = computed(() => {
  return {
  graphic: [ // 新增 graphic 配置
    {
      type: 'image',
      left: 'center',      // 水平居中
      top: '40%',         // 垂直位置与仪表盘中心对齐
      style: {
        image: icon, // 替换为你的图片路径
        width: 40,        // 图片宽度
        height: 40        // 图片高度
      },
      z: 101,             // 确保图片在最上层
      // 微调位置（根据宽高偏移中心点）
      position: [-20, -20] // 左移和上移宽高的一半（这里宽高40，各移-20）
    }
  ],
  series: [
    {
      type: 'gauge',
      radius: '60%',
      z: 11,
      center: ['50%', '50%'],
      startAngle: 270,
      endAngle: -110,
      min: 0,
      max: 100,
      splitNumber: 12,
      // 外圈背景色配置
      axisLine: { lineStyle: {
          width: 500, // 轴线宽度
          color: [[1, 'rgba(34, 49, 46,0.8)']],
          }
      },
      axisTick: { 
        show: false
      },
      splitLine: { show: false },
      axisLabel: { show: false },
      pointer: { show: false },
      detail: { show: false },
    },
    {
      type: 'gauge',
      radius: '55%',
      z: 10,
      center: ['50%', '50%'],
      startAngle: 270,
      endAngle: -110,
      min: 0,
      max: 100,
      splitNumber: 12,
      // 外圈背景色配置
      axisLine: {
        lineStyle: {
          width: -20,      // 外圈粗细
          color: [
            [1, 'rgba(34, 49, 46,0.8)'] // 全范围填充灰色作为背景
          ]
        }
      },
      axisTick: { 
        show: true ,
        distance: 8,
        length: 1,          // 隐藏原始刻度线
        symbol: 'circle',   // 设置为圆点
        symbolSize: 6,      // 点的大小
        splitNumber: 12,
        lineStyle: {
          color:'rgba(180, 252, 221,0.5)'
        }
      },
      splitLine: { show: false },
      axisLabel: { show: false },
      pointer: { show: false },
      detail: { show: false },
    },
    {
      type: 'gauge',
      radius: '60%',
      z: 103,
      center: ['50%', '50%'],
      startAngle: 270,
      endAngle: -110,
      min: 0,
      max: 100,
      itemStyle: {color: 'rgba(97, 188, 119,0.8)'  },
      progress: { show: true, width: 5 },
      pointer: {
        show: false,
      },
      axisLine: { 
        show: false
      },
      axisTick: {  show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      detail: { show: false },
      data: [{ value: 82.5 }]
    },
    // 主仪表盘（中间层：进度条、指针）
    {
      type: 'gauge',
      z: 102,
      center: ['50%', '50%'],
      radius: '60%',
      startAngle: 270,
      endAngle: -110,
      min: 0,
      max: 100,
      splitNumber: 12,
      itemStyle: { 
        color: {
        type: 'linear',
        x: 0,   // 渐变起始点 x 坐标（0=左，1=右）
        y: 0,   // 渐变起始点 y 坐标（0=上，1=下）
        x2: 1,  // 渐变结束点 x 坐标
        y2: 0,  // 渐变结束点 y 坐标（设置为水平渐变）
        colorStops: [{
          offset: 0, 
          color: 'rgba(31, 63, 48,0.1)' // 起始颜色
        }, {
          offset: 1, 
          color: 'rgb(45, 118, 73,0.9)' // 结束颜色
        }]
  } },
      progress: {
        show: true,
        width: 500,
        zIndex: 100, // 进度条层级
      },
      axisLine: { lineStyle: {
          width: 5, // 轴线宽度
          color: [[1, 'rgba(97, 188, 119,0.1)']],
          }
      },
      axisTick: { 
        show:false
      },
      splitLine: { show:false },
      axisLabel: { show: false },
      anchor: { show: false },
      pointer:{ show: false},
      title: { show: false },
      detail: { show: false},
      data: [{ value: 82.5}]
    },
    // 数值标签（最上层）
    {
      type: 'gauge',
      radius: '60%',
      z: 200, // 最高层级
      center: ['50%', '50%'],
      startAngle: 270,
      endAngle: -110,
      min: 0,
      max: 100,
      silent: true, // 禁用交互
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      pointer: {
        icon: 'circle',
        length: '75%',
        width: 10,
        offsetCenter: [0, '-30%'],
        itemStyle: { color: 'rgb(180, 252, 221)'}
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['10%', '110%'], // 数值位置
        // fontSize: 100,
        fontWeight: 'bolder',
        formatter: function (value) {
          return '{value|' + value + '}{unit|%}';
        },
        rich: {
          value: {
            fontSize: 30,
            fontWeight: 400,
            color: '#fff'
          },
          unit: {
            fontSize: 15,
            color: '#fff',
            fontWeight: 200,
            padding: [0, 0, -10, 10]
          }
        },
      },
      data: [{ value: 82.5 }]
    },
  ]
  }
})
</script>

<template>
  <echart :width="width" :height="height" :theme="theme" :option="Echartoption" />
</template>

<style scoped></style>
