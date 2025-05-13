<script setup>
import ProgressBar from '@/components/ProgressBar.vue'
import gaugeChart from '@/components/gaugeChart.vue'

const salesData = [
  { name: '第一季度', value: 125 },
  { name: '第二季度', value: 180 },
  { name: '第三季度', value: 150 },
  { name: '第四季度', value: 210 }
]
// 生态保护红线数据
const ecologicalData = [
  { label: '数据一', value: 160, percentage: 42.6, unit: 'xx' },
  { label: '数据二', value: 130, percentage: 37.5, unit: 'xx' },
  { label: '数据三', value: 90, percentage: 19.9, unit: 'xx' }
]

// 永久基本农田保有量数据
const farmlandData = [
  { label: '数据一', value: 160, percentage: 42.6, unit: '万人' },
  { label: '数据二', value: 130, percentage: 37.5, unit: '万人' },
  { label: '数据三', value: 90, percentage: 19.9, unit: '万人' }
]

// 常住人口数据
const populationData = [
  { label: '数据一', value: 160, percentage: 42.6, unit: 'aa' },
  { label: '数据二', value: 130, percentage: 37.5, unit: 'bb' },
  { label: '数据三', value: 90, percentage: 19.9, unit: 'cc' }
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
  <ProgressBar
    :gradient-color="'linear-gradient(to right,#264d35,#ccb23f)'"
    :name="'销售进度'"
    :description="38.5"
    :percentage="38.5"
  />
  <radarCarts />
  <gaugeChart :seriesData="gaugeData" />  
  <div class="location-conditions">
    <div class="circle">
      <CircleChart
        title="生态保护红线"
        :centerValue="80"
        :showLabel="true"
        centerLabel="数据数据"
        :dataItems="ecologicalData"
      />

      <CircleChart
        title="永久基本农田保有量（万亩）"
        :centerValue="80"
        centerLabel="总计人口"
        legend="right"
        :dataItems="farmlandData"
      />

      <CircleChart
        title="常住人口"
        :centerValue="80"
        centerLabel="总计人口"
        :dataItems="populationData"
        :showLegend="false"
      />
    </div>
  </div>
</template>

<style scoped>
.location-conditions {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.circle {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
