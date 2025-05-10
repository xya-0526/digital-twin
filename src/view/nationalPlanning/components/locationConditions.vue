<script setup>
// 生态保护红线数据
const ecologicalData = [
  { label: '数据一', value: 160, percentage: 42.6, color: '#39a9ed', unit: 'xx' },
  { label: '数据二', value: 130, percentage: 37.5, color: '#47d996', unit: 'xx' },
  { label: '数据三', value: 90, percentage: 19.9, color: '#f5cc45', unit: 'xx' }
]

// 永久基本农田保有量数据
const farmlandData = [
  { label: '数据一', value: 160, percentage: 42.6, color: '#39a9ed', unit: '万人' },
  { label: '数据二', value: 130, percentage: 37.5, color: '#47d996', unit: '万人' },
  { label: '数据三', value: 90, percentage: 19.9, color: '#f5cc45', unit: '万人' }
]

// 常住人口数据
const populationData = [
  { label: '数据一', value: 160, percentage: 42.6, color: '#39a9ed', unit: '' },
  { label: '数据二', value: 130, percentage: 37.5, color: '#47d996', unit: '' },
  { label: '数据三', value: 90, percentage: 19.9, color: '#f5cc45', unit: '' }
]
</script>

<template>
  <div class="location-conditions">
    <div class="circle">
      <CircleChart
        title="生态保护红线"
        :centerValue="80"
        :showLabel="truw"
        centerLabel="数据数据"
        :dataItems="ecologicalData"
      />

      <CircleChart
        title="永久基本农田保有量（万亩）"
        :centerValue="80"
        centerLabel="总计人口"
        :dataItems="farmlandData"
      />

      <CircleChart
        title="常住人口"
        :centerValue="80"
        centerLabel="总计人口"
        :dataItems="populationData"
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
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
