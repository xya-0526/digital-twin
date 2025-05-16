<script setup>
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
const gaugeData = {
  name: '销售达成率',
  data: 80
}

// 建筑用地数据
const buildingData = [
  { label: '数据一', value: 160, percentage: 42.6,  },
  { label: '数据二', value: 130, percentage: 37.5,  },
]

const colors = ['linear-gradient(90deg, #503e2a 0%, #cdba55 100%)','linear-gradient(90deg, #3d4a30 0%, #3fc894 100%)','linear-gradient(90deg, #1c3d2c 0%, #4ca5cd 100%)']

</script>

<template>
  <div class="header"></div>
  <div class="main">
    <div class="banner">
      <div class="left">
        <div class="one">
          <div class="titles">
            <div class="test1">示范区国土空间总体规划</div>
          </div>
          <div class="onebanner">
            <CartBoxone :width="'13.8281vw'" :height="'16.8056vh'">
              <textTitle></textTitle>
            </CartBoxone>
            <CartBoxone :width="'9.707vw'" :height="'16.8056vh'"></CartBoxone>
            <CartBoxtow  :width="'7.793vw'" :height="'16.5972vh'">
              <CircleChart
                :showPercentage="false"
                title="生态保护红线"
                :centerValue="80"
                :showLegend="true"
                :legend="'right'"
                centerLabel="数据数据"
                :dataItems="ecologicalData"
                :width="'7.793vw'" 
                :height="'16.5972vh'"
                :roseType="'pie'"
                :radius="['35%','60%']"
              />
            </CartBoxtow>
            <CartBoxtow :width="'7.793vw'" :height="'16.5972vh'">
              <ProgressAll
                :width="'6.793vw'"
                :height="'16.5972vh'"
                :colors="colors"
              >
            </ProgressAll>
            </CartBoxtow>
            <CartBoxtow :width="'7.793vw'" :height="'16.5972vh'"></CartBoxtow>
          </div>
        </div>
        <div class="two">
          <div class="titles">
            <div class="test1">先行启动区国土空间总体规划</div>
          </div>
          <div class="towbanner">
            <CartBoxone :width="'7.7734vw'" :height="'16.8056vh'">
              <CircleChart
              title="生态保护红线"
              :centerValue="80"
              :showLegend="false"
              centerLabel="数据数据"
              :dataItems="ecologicalData"
              :width="'7.7734vw'" 
              :height="'16.8056vh'"
              :isCong="true"
            />
            </CartBoxone>
            <CartBoxone :width="'7.7734vw'" :height="'16.8056vh'"></CartBoxone>
            <CartBoxone :width="'7.7734vw'" :height="'16.8056vh'">
              <ProgressAll :data="[{icon:'icon-1',name:'生态保护红线',value:80},{ icon:'icon-2',name:'生态保护红线',value:80}]" :width="'7.7734vw'" ></ProgressAll>
            </CartBoxone>
          </div>
        </div>
        <div class="three">
          <div class="titles">
            <div class="test1">水乡单元详细规划</div>
          </div>
          <div class="threebanner">
            <CartBoxtow :width="'7.793vw'" :height="'11.5083vh'"></CartBoxtow>
            <CartBoxtow :width="'7.793vw'" :height="'11.5083vh'"></CartBoxtow>
            <CartBoxtow :width="'7.793vw'" :height="'11.5083vh'"></CartBoxtow>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="blist">
          <StructureButton> </StructureButton>
        </div>
        <div class="carts">
          <CartBoxone :width="'10.8164vw'" :height="'22.4847vh'" :title="'生态保护红线'">
            <CircleChart
              :centerValue="80"
              :showLabel="true"
              centerLabel="数据数据"
              :dataItems="ecologicalData"
              :width="'10.8164vw'"
              :height="'22.4847vh'"
            />
          </CartBoxone>
          <CartBoxone :width="'10.8164vw'" :height="'22.4847vh'">
            <CircleChart
              title="永久基本农田保有量（万亩）"
              :centerValue="80"
              centerLabel="总计人口"
              legend="right"
              :dataItems="farmlandData"
              :width="'10.8164vw'"
              :height="'22.4847vh'"
            />
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
          <CartBoxone :width="'10.8164vw'" :height="'22.4847vh'">
            <gauges></gauges>
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
          <CartBoxtow :width="'10.8164vw'" :height="'22.4847vh'" >
            <ProgressAll :isMax="true" :progwidth="' 7.7891vw'" :data="[{icon:'icon-1',name:'生态保护红线',value:80},{ icon:'icon-2',name:'生态保护红线',value:80},{ icon:'icon-3',name:'生态保护红线',value:80}]"></ProgressAll>
          </CartBoxtow>
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
.header {
  width: 100vw;
  height: 10.0694vh;
  border-radius: 0 0 0 0;
  opacity: 1;
  background: var(--header-brackground);
  margin-bottom: 1.7361vh;
}
.main {
  width: 100%;
  height: 100%;
  padding: var(--content-padding);
}

.banner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-family: 'SourceHanSansCN';
  .left {
    width: 29.2188vw;
    height: 86.1806vh;
    opacity: 1;
    align-items: start;
    .one {
      z-index: 1;
      width: 24.5898vw;
      height: 41.5972vh;
      border-radius: 11.5px;
      opacity: 1;
      border: 1px solid #2c3534;
      background: var(--backgrouend-tow);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .titles {
        z-index: 2;
        width: 23.8086vw;
        height: 10%;
        /* opacity: 1; */
        border-radius: 0.0977vw;
        border: 1px solid #314347;
        background: linear-gradient(90deg, #2a5934 0%, #1e3033 100%);
        .test1 {
          width: 5.9621vw;
          height: 100%;
          z-index: 100;
          color: #fff;
          font-size: 0.4883vw;
          display: flex;
          align-items: center;
          margin-left: 0.5859vw;
        }
      }
      .onebanner {
        width: 23.8086vw;
        height: 85%;
        /* background-color: #fff; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      }
    }
    .two {
      width: 24.5898vw;
      height: 24.2361vh;
      border-radius: 11.5px;
      opacity: 1;
      border: 1px solid #2c3535;
      background: var(--backgrouend-tow);
      margin-top: 0.6944vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      .titles {
        z-index: 2;
        width: 23.8086vw;
        height: 15%;
        /* opacity: 1; */
        border-radius: 0.0977vw;
        border: 1px solid #314347;
        background: linear-gradient(90deg, #2a5934 0%, #1e3033 100%);
        .test1 {
          width: 7.0313vw;
          height: 100%;
          z-index: 100;
          color: #fff;
          font-size: 0.4883vw;
          display: flex;
          align-items: center;
          margin-left: 0.5859vw;
        }
      }
      .towbanner{
        width: 23.8086vw;
        height: 85%;
        /* background-color: #fff; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      }
    }
    .three {
      width: 24.5898vw;
      height: 17.7083vh;
      border-radius: 11.5px;
      opacity: 1;
      border: 1px solid #2c3534;
      background: var(--backgrouend-tow);
      margin-top: 0.6944vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
       .titles {
        z-index: 2;
        width: 23.8086vw;
        height: 20%;
        /* opacity: 1; */
        border-radius: 0.0977vw;
        border: 1px solid #314347;
        background: linear-gradient(90deg, #2a5934 0%, #1e3033 100%);
        .test1 {
          width: 4.3359vw;
          height: 100%;
          z-index: 100;
          color: #fff;
          font-size: 0.4883vw;
          display: flex;
          align-items: center;
          margin-left: 0.5859vw;
        }
      }
      .threebanner{
        width: 23.8086vw;
        height: 70%;
        /* background-color: #fff; */
        display: flex;
        justify-content: space-around;
        align-content: center;
      }
    }
  }
  .right {
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
    .blist {
      width: 98%;
      height: 12%;
      /* background: #1c3829d6; */
    }
    .carts {
      width: 100%;
      height: 85%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
