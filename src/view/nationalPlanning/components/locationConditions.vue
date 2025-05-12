<script setup>
import ProgressBar from '@/components/ProgressBar.vue'
import gaugeChart from '@/components/gaugeChart.vue'

const salesData = [
  { name: '第一季度', value: 125 },
  { name: '第二季度', value: 180 },
  { name: '第三季度', value: 150 },
  { name: '第四季度', value: 210 }
]
const gaugeData ={
  name: '销售达成率',
  data: 80,
}
</script>

<template>
  <BarCharts
    title="销售数据统计"
    :x-axis-data="['一月', '二月', '三月', '四月', '五月']"
    :series-data="[
      {
        name: '线上渠道',
        data: [120, 200, 150, 80, 70],
        color: '#5470c6',
        offsetColor: 'rgba(90, 117, 197,0.1)'
      },
      {
        name: '线下渠道',
        data: [80, 120, 90, 110, 130],
        color: '#91cc75',
        offsetColor: 'rgba(145, 204, 117,0.1)'
      }
    ]"
    theme="dark"
    :horizontal="false"
  />
  <PieChart />
  <ProgressBar
    :gradient-color="'linear-gradient(to right,#264d35,#ccb23f)'"
    :name="'销售进度'"
    :description="38.5"
    :percentage="38.5"
  />
  <radarCarts />
  <gaugeChart :seriesData="gaugeData" />  
</template>

<style scoped></style>
