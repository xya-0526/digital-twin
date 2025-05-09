<template>
  <EChart :option="barOption" :theme="theme" />
</template>

<script setup>
import EChart from './echart.vue';
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
    validator: (value) => value.every(item => item.name && item.value)
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
  }
});

const barOption = computed(() => ({
  title: {
    text: props.title,
    left: 'center',
    textStyle: {
      fontSize: 16,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: '{b}<br/>{a}: {c}'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    name: props.xAxisName,
    axisLine: {
      lineStyle: {
        color: '#999'
      }
    }
  },
  yAxis: {
    type: 'category',
    data: props.data?.map(item => item.name),
    name: props.yAxisName,
    axisLine: {
      lineStyle: {
        color: '#999'
      }
    }
  },
  series: [
    {
      name: '数值',
      type: 'bar',
      data: props.data?.map(item => item.value),
      itemStyle: {
        color: props.color
      },
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      label: {
        show: true,
        position: 'right',
        formatter: '{c}'
      }
    }
  ]
}));
</script>