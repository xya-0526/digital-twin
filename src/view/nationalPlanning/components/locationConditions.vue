<script setup>
import ProgressBar from '@/components/ProgressBar.vue'
import CartBoxone from '@/components/cartBoxone.vue'
import gaugeChart from '@/components/gaugeChart.vue'
import { colProps } from 'element-plus'

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
  <!-- <CartBoxone :title="'清水绿廊管控宽度'" :style="{width: '605px', height:'352px'}">
    <BarCharts
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
  </CartBoxone>
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
  </div> -->
  <div class="header"></div>
  <div class="main">
    <div class="banner">
      <div class="left">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </div>
      <div class="right">
        <div class="blist"></div>
        <div class="carts">
          <CircleChart
            title="生态保护红线"
            :centerValue="80"
            :showLabel="true"
            centerLabel="数据数据"
            :dataItems="ecologicalData"
            :width="'10.8164vw'" 
            :height="'22.4847vh'"
          />
           <CircleChart
            title="永久基本农田保有量（万亩）"
            :centerValue="80"
            centerLabel="总计人口"
            legend="right"
            :dataItems="farmlandData"
            :width="'10.8164vw'" 
            :height="'22.4847vh'"
          />
          <CartBoxone :width="'10.8164vw'" :height="'22.4847vh'">
             <BarCharts
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
          </CartBoxone>
          <CartBoxone :width="'10.8164vw'" :height="'22.4847vh'">
            
          </CartBoxone>
          <CartBoxone :width="'10.8164vw'" :height="'22.4847vh'">
            <BarCharts
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
          </CartBoxone>
          <CartBoxone :width="'10.8164vw'" :height="'22.4847vh'"></CartBoxone>
        </div>
      </div>
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
.header{
  width: 100vw;
  height: 10.0694vh;
  border-radius: 0 0 0 0;
  opacity: 1;
  background: var(--header-brackground);
  margin-bottom: 1.7361vh;
}
.main{
  width: 100%;
  height: 100%;
  padding: var(--content-padding);
}

.banner{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
.left{
  width: 29.2188vw;
  height: 86.1806vh;
  opacity: 1;
  align-items: start;
  .one{
    width: 24.5898vw;
    height: 41.5972vh;
    border-radius: 11.5px;
    opacity: 0.76;
    border: 1px solid #2c3534;
    background:var(--backgrouend-tow);
  }
  .two{
    width: 24.5898vw;
    height: 24.2361vh;
    border-radius: 11.5px;
    opacity: 0.76;
    border: 1px solid #2c3535;
    background: var(--backgrouend-tow);
    margin-top: 0.6944vh;
  }
  .three{
    width: 24.5898vw;
    height: 17.7083vh;
    border-radius: 11.5px;
    opacity: 0.76;
    border: 1px solid #2c3534;
    background:var(--backgrouend-tow);
    margin-top: 0.6944vh;
  }
}
 .right{
  width: 24.5313vw;
  align-items: end;
  height: 85.4167vh;
  border-radius: 16px;
  opacity: 1;
  border: 1px solid #456655;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1.3889vh;
  background: var(--backgrouend-tow);
  .blist{
    width: 95%;
    height: 10%;
    background: #1c3829d6;
  }
  .carts{
    width: 95%;
    height: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
 }
}

</style>
