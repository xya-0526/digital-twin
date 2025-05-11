<template>
  <div class="circle-chart-container">
    <div class="chart-title">
      <img class="title-icon" :src="Point" alt="point" />
      {{ title }}
    </div>
    <div class="chart-content">
      <div class="chart-wrapper" ref="chartRef"></div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import Point from '@/assets/images/point.svg'

const props = defineProps({
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
    validator: value => ['radius', 'area', undefined].includes(value)
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
  }
}

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
        name: props.title,
        type: 'pie',
        radius: ['33%', '45%'],
        width: chartWidth,
        roseType: props.roseType,
        padAngle: 1,
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 1,
          borderWidth: 8,
          borderColor: 'rgba(133, 208, 106, .1)'
        },
        label: {
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
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 10,
          lineStyle: {
            color: 'rgba(255,255,255,0.5)',
            width: 1.2
          }
        },
        labelLayout: params => {
          const isLeft = params.labelRect.x < chartWidth / 2
          const points = params.labelLinePoints
          points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width
          return { labelLinePoints: points, draggable: true }
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
      }
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
            right: '10%',
            top: 'middle',
            orient: 'vertical'
          }
        : {
            bottom: '0%',
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
.circle-chart-container {
  width: 605px;
  height: 320px;
  position: relative;
  background-color: #142222;
  border: 1px solid var(--border-default);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.chart-title {
  width: 605px;
  height: 42.51px;
  border-radius: 8px;
  opacity: 1;
  background: linear-gradient(180deg, rgb(58, 128, 78) 0%, rgba(20, 34, 34, 0) 100%);
  display: flex;
  align-items: center;
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-family: 'SourceHanSansCN';
  border-bottom: 1px solid rgba(69, 102, 85, 1);
}

.title-icon {
  display: inline-block;
  margin: 5px;
}

.chart-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 42px);
  position: relative;
}

.chart-wrapper {
  width: 100%;
  height: 95%;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
