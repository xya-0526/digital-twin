<template>
  <EChart :option="pieOption" :theme="theme" />
</template>

<script setup>
import EChart from './EChart.vue';
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
  theme: {
    type: String,
    default: 'light'
  }
});

const pieOption = computed(() => ({
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
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: props.data?.map(item => item.name)
  },
  series: [
    {
      name: '数据占比',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        formatter: '{b}: {d}%'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '18',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: true
      },
      data: props.data
    }
  ]
}));
</script>