<template>
  <div class="circle-chart-container" :style="containerStyle">
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
  // 基础配置
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
  // 尺寸配置
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '200px'
  },
  // 图表配置
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
  // 交互配置
  showTooltip: {
    type: Boolean,
    default: true
  },
  showLabel: {
    type: Boolean,
    default: true
  }
})

const chartRef = ref(null)
let chartInstance = null

const containerStyle = computed(() => ({
  width: props.width,
  height: props.height
}))

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
      left: 'center',
      top: 'center',
      textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'var(--text-primary)'
      },
      subtextStyle: {
        fontSize: 14,
        color: 'var(--text-secondary)'
      }
    },
    series: [
      {
        name: props.title,
        type: 'pie',
        radius: ['45%', '60%'],
        width: chartWidth,
        roseType: props.roseType,
        padAngle: 2,
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 1
        },
        label: {
          show: true,
          position: 'outer',
          alignTo: 'edge',
          formatter: params => {
            const value = props.showPercentage
              ? params.percent + '%'
              : params.value + (props.valueUnit || '')
            return `{name|${params.name}}\n{value|${value}}`
          },
          minMargin: 5,
          edgeDistance: 10,
          lineHeight: 15,
          rich: {
            name: {
              fontSize: 12,
              color: 'white',
              padding: [0, 4]
            },
            value: {
              fontSize: 12,
              color: 'white',
              fontWeight: 'bold',
              padding: [4, 0]
            }
          }
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 0,
          maxSurfaceAngle: 80,
          lineStyle: {
            color: 'white'
          }
        },
        labelLayout: params => {
          const isLeft = params.labelRect.x < chartWidth / 2
          const points = params.labelLinePoints
          points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width
          return { labelLinePoints: points }
        },
        data: props.dataItems.map(item => ({
          value: item.percentage,
          name: item.label,
          itemStyle: {
            color: item.color,
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.2)'
          }
        })),
        emphasis: {
          scale: true,
          scaleSize: 10,
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ],
    graphic: [
      {
        type: 'circle',
        left: '32.6%',
        top: '15.7%',
        shape: {
          cx: 0,
          cy: 0,
          r: chartWidth * 0.17
        },
        silent: true,
        style: {
          fill: 'rgba(48, 68, 46, 0.5)',
          lineWidth: 1
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
  position: relative;
  background-color: var(--primary-bg);
  border: 1px solid var(--border-default);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
}

.chart-title {
  width: 100%;
  color: var(--text-primary);
  font-size: 15px;
  padding: 2px;
  background: var(--bg-gradient);
  border-bottom: 1px solid var(--border-light);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
}

.title-icon {
  display: inline-block;
  margin: 5px;
}

.chart-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: calc(100% - 40px);
}

.chart-wrapper {
  width: 60%;
  height: 70%;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
}

.data-info {
  width: 50%;
  padding: var(--spacing-md) 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.data-item {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.data-color {
  width: var(--spacing-md);
  height: var(--spacing-md);
  margin-right: var(--spacing-sm);
}

.data-label {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  flex: 1;
}

.data-value {
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  font-weight: bold;
  min-width: 60px;
  text-align: right;
}

.data-unit {
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
  margin-left: var(--spacing-xs);
}
</style>
