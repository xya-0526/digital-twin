<template>
  <div class="chart-wrapper" ref="chartRef" :style="{width: props.width,height: props.height}"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  centerValue: {
    type: [Number, String],
    required: true
  },
  centerLabel: {
    type: String,
    default: '总计数据'
  },
  dataItems: {
    type: Array,
    required: true,
    default: () => []
  },
  roseType: {
    type: String,
    default: undefined,
  },
  showPercentage: {
    type: Boolean,
    default: true
  },
  valueUnit: {
    type: String,
    default: ''
  },
  showTooltip: {
    type: Boolean,
    default: true
  },
  showLabel: {
    type: Boolean,
    default: true
  },
  showLegend: {
    type: Boolean,
    default: true
  },
  legend: {
    type: String,
    default: 'bottom'
  },
  isCong:{
    type: Boolean,
    default: false
  },
  radius: {
    type: Array,
    default:() => ['33%', '45%']
  },
  center:{
    type: Array,
    default: ()=>['50%', '50%']
    },
  radiusCong:{
      type: Array,
      default:()=>['33%', '50%']
  }
})

const chartRef = ref(null)
let chartInstance = null

const initChart = () => {
  if (!chartRef.value) return
  chartInstance = echarts.init(chartRef.value)
  updateChart()
  window.addEventListener('resize', handleResize)
}

const handleResize = () => {
  if (chartInstance) {
    chartInstance.resize()
    initChart()
  }
}
console.log(props.isCong);


const updateChart = () => {
  if (!chartInstance) return

  const chartWidth = chartRef.value?.offsetWidth || 400

  chartInstance.setOption({
    backgroundColor: 'transparent',
    title: {
      text: String(props.centerValue),
      subtext: props.centerLabel,
      top: '40%',
      left: 'center',
      textStyle: {
        fontSize: 24,
        fontWeight: 'normal',
        color: '#fff'
      },
      subtextStyle: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.6)',
        padding: [5, 0]
      }
    },
    series: [
      {
        z: 10,
        name: props.title,
        type: 'pie',
        radius: props.radius,
        center: props.center,
        width: chartWidth,
        roseType: props.roseType,
        padAngle: 1,
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 1
          // borderWidth: 8,
          // borderColor: 'rgba(133, 208, 106, .1)'
        },
        label: props.showPercentage?{
          show: true,
          position: 'outer',
          alignTo: 'none',
          formatter: params => {
            const value = props.showPercentage
              ? params.percent + '%'
              : params.value + (props.valueUnit || '')
            return `{name|${params.name}}\n{value|${value}}`
          },
          edgeDistance: 10,
          lineHeight: 27,
          rich: {
            name: {
              fontSize: 16,
              color: 'white',
              padding: [4, 0]
            },
            value: {
              fontSize: 20,
              color: 'white',
              fontWeight: 'normal',
              padding: [6, 0]
            }
          }
        }:{
          show: false
        },
        labelLine:props.showPercentage? {
          show: true,
          length: 15,
          length2: 10,
          lineStyle: {
            color: 'rgba(255,255,255,0.5)',
            width: 1.2
          }
        }:{
          show: false
        },
        labelLayout: props.showPercentage? params => {
          const isLeft = params.labelRect.x < chartWidth / 2
          const points = params.labelLinePoints
          points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width
          return { labelLinePoints: points, draggable: true }
        }: {},
        data: props.dataItems.map(item => {
          return {
            value: item.percentage,
            name: item.label,
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.2)'
            }
          }
        }),
        emphasis: {
          scale: true,
          scaleSize: 10,
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      props.isCong?{
        z: 1,
        type: 'pie',
        radius: props.radiusCong,
        center: props.center,
        width: chartWidth,
        roseType: props.roseType,
        padAngle: 1,
        avoidLabelOverlap: false,
        data: props.dataItems.map(item => {
          return {
            value: item.percentage,
            name: item.label,
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              opacity: 0.5 // 整体透明度设为50%,
            }
          }
        }),
        label: {
          show: false
        }
      }:{}
    ],
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: params => {
        const value = props.showPercentage
          ? params.percent + '%'
          : params.value + (props.valueUnit || '')
        return `${params.name}: ${value}`
      },
      backgroundColor: 'var(--bg-gradient)',
      borderColor: 'var(--border-default)',
      borderWidth: 1,
      padding: [8, 12],
      textStyle: {
        color: 'var(--text-primary)',
        fontSize: 14
      }
    },
    legend: {
      show: props.showLegend,
      ...(props.legend === 'right'
        ? {
            right: '0%',
            top: 'middle',
            orient: 'vertical'
          }
        : {
            bottom: '10%',
            orient: 'horizontal'
          }),
      itemWidth: 24,
      itemHeight: 12,
      textStyle: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 14,
        padding: [0, 0, 0, 6]
      }
    }
  })
}

onMounted(() => {
  initChart()
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
  window.removeEventListener('resize', handleResize)
})

watch(() => [props.dataItems, props.centerValue, props.centerLabel], updateChart, { deep: true })
</script>

<style scoped>
.chart-wrapper {
  width: 605px;
  height: 280px;
  /* filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6)); */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
