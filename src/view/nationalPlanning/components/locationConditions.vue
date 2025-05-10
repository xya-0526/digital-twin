<script setup>
const salesData = [
  { name: '第一季度', value: 125 },
  { name: '第二季度', value: 180 },
  { name: '第三季度', value: 150 },
  { name: '第四季度', value: 210 }
]
</script>

<template>
  <BarCharts
    :data="salesData"
    title="2023年季度销售额"
    x-axis-name="销售额(万元)"
    y-axis-name="季度"
    color="#67C23A"
  />
  <PieChart />
</template>

<style scoped></style>
