<template>
  <div
    ref="chartRef"
    class="chart-wrapper"
    :style="{width: props.width,height: props.height}"
  />
</template>

<script setup>
import * as echarts from 'echarts'
import { formatter } from 'element-plus'
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
  },
  titleLeft:{
    type: String,
    default:'center'
  },
  LabelRight:{
    type:String,
    default:'0%'
  },
  legendGap:{
    type: [String, Number],
    default: 10
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
      text: `{a|${String(props.centerValue)}}\n{b|${ props.centerLabel}}`,
      y: '40%',
      x: props.titleLeft,
      textStyle:{
        rich:{
          a:{
              fontSize: 24,
              color: '#fff',
              fontWeight:'400',
          },
          b:{
              fontSize: 16,
              color: '#fff',
              padding: [10,-15]
          }
        }
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
        label: {
          normal: {
            position: 'inside',
            backgroundColor: 'white',
            width: 5,
            height: 5,
            borderRadius: 5,
            padding: 1,
            margin: 1,
            formatter: ''
          }
        },
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
        label: props.showPercentage
              ? {
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
                      opacity: 1 ,
                      fontSize: 16,
                      color: '#fff',
                      padding: [4, 0]
                    },
                    value: {
                      fontSize: 20,
                      color: '#FFF',
                      fontWeight: 'normal',
                      padding: [6, 0],
                      opacity: 1
                    }
                  }
                }
              : {
                  show: false
                },
            labelLine: props.showPercentage
              ? {
                  show: true,
                  length: 25,
                  length2: 20,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    width: 1.2
                  }
                }
              : {
                  show: false
                },
            labelLayout: props.showPercentage
              ? params => {
                  const isLeft = params.labelRect.x < chartWidth / 2
                  const points = params.labelLinePoints
                  points[2][0] = isLeft
                    ? params.labelRect.x
                    : params.labelRect.x + params.labelRect.width
                  return { labelLinePoints: points, draggable: true }
                }
              : {},
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
            })
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
            right: props.LabelRight,
            top: 'middle',
            orient: 'vertical'
          }
        : {
            bottom: '10%',
            orient: 'horizontal'
          }),
      itemWidth: 26,
      itemHeight: 10,
      itemGap: 10,
      // textStyle: {
      //   color: 'rgba(255,255,255,0.6)',
      //   fontSize: 14,
      //   padding: [0, 0, 0, 6]
      // },
      formatter: function(name){
        console.log(name);
        const targetItem = props.dataItems.find(item => item.label === name)
        const value = targetItem?.value
        const unit = targetItem?.unit
        return `{title|${name}+'xxxxxx'}\n{value|${value}}{unit|${unit}}`;
      },
      textStyle:{
        color: '#ffffff',
        rich:{
          title:{
            fontSize: 16,
            lineHeight:30,// 控制第一行高度
            padding:[30,0,10,10],
            verticalAlign:'middle',
            fontWeight:'200'
          },
          value:{
            fontSize: 24,
            lineHeight: 24,
            padding:[30,0,0,10],
            verticalAlign:'middle',
            fontWeight:'400'
          },
          unit:{
            fontSize: 24,
            lineHeight: 24,
            padding:[30,0,0,10],
            verticalAlign:'middle',
            fontWeight:'200'
          }
        }
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
