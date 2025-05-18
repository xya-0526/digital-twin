<script setup>
import ProgressBar from '@/components/ProgressBar.vue'
import CartBoxone from '@/components/cartBoxone.vue'
import gaugeChart from '@/components/gaugeChart.vue'
import AeraButton from '@/components/AeraButton.vue'
import { colProps, textProps } from 'element-plus'
import BottomButton from '@/components/BottomButton.vue'
import ColumnButton from '@/components/ColumnButton.vue'
import SeclectBox from '@/components/SeclectBox.vue'
import cartBoxTowContent from '@/components/cartBoxTowContent.vue'
import cartBoxOneCentent from '@/components/cartBoxOneCentent.vue'
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
  { label: '数据一', value: 160, percentage: 42.6, },
  { label: '数据二', value: 130, percentage: 37.5, },
]

const colors = ['linear-gradient(90deg, #503e2a 0%, #cdba55 100%)', 'linear-gradient(90deg, #3d4a30 0%, #3fc894 100%)', 'linear-gradient(90deg, #1c3d2c 0%, #4ca5cd 100%)']
//cartBoxTowContent文本图片资源
const Cart2Array = [{
  text: "规划单元总数",
  image: {
    src: '../src/assets/images/P15.png',
    alt: ''
  }

},
{
  text: "在编规划数量",
  image: {
    src: '../src/assets/images/P13.png',
    alt: ''
  }

},

{
  text: "已批规划数量",
  image: {
    src: '../src/assets/images/P12.png',
    alt: ''
  }

},
]
</script>
<template>
  <div class="main">
    <SeclectBox></SeclectBox>
    <AeraButton></AeraButton>
    <BottomButton></BottomButton>
    <ColumnButton></ColumnButton>
    <div class="banner">
      <div class="left">
        <div class="one">
          <div class="titles">
            <div class="test1">示范区国土空间总体规划</div>
          </div>
          <div class="onebanner">
            <CartBoxone :width="'70.8rem'" :height="'24.299rem'">
              <textTitle></textTitle>
            </CartBoxone>
            <CartBoxone :width="'49.7rem'" :height="'24.299rem'">
              <titleList></titleList>
            </CartBoxone>
            <CartBoxtow :width="'39.999rem'" :height="'23.8999rem'">
              <CircleChart :showPercentage="false" title="生态保护红线" :centerValue="80" :showLegend="true" :legend="'right'"
                centerLabel="数据数据" :dataItems="ecologicalData" :width="'39.999rem'" :height="'23.8999rem'"
                :roseType="'pie'" :radius="['35%', '60%']" />
            </CartBoxtow>
            <CartBoxtow :width="'39.999rem'" :height="'23.8999rem'">
              <ProgressAll :width="'34.78016rem'" :height="'23.8999rem'" :colors="colors">
              </ProgressAll>
            </CartBoxtow>
            <CartBoxtow :width="'39.999rem'" :height="'23.8999rem'">
              <ecologyTitle :width="'39.999rem'" :height="'23.8999rem'"></ecologyTitle>
            </CartBoxtow>
          </div>
        </div>
        <div class="two">
          <div class="titles">
            <div class="test1">先行启动区国土空间总体规划</div>
          </div>
          <div class="towbanner">
            <CartBoxone :width="'39.799rem'" :height="'24.20064rem'">
              <CircleChart title="生态保护红线" :centerValue="80" :showLegend="false" centerLabel="数据数据"
                :dataItems="ecologicalData" :width="'7.7734vw'" :height="'24.20064rem'" :isCong="true" />
            </CartBoxone>
            <CartBoxone :width="'39.799rem'" :height="'24.20064rem'">
              <cartBoxOneCentent></cartBoxOneCentent>
            </CartBoxone>
            <CartBoxone :width="'39.799rem'" :height="'24.20064rem'">
              <ProgressAll
                :data="[{ icon: 'icon-1', name: '生态保护红线', value: 80 }, { icon: 'icon-2', name: '生态保护红线', value: 80 }]"
                :width="'39.799rem'"></ProgressAll>
            </CartBoxone>
          </div>
        </div>
        <div class="three">
          <div class="titles">
            <div class="test1">水乡单元详细规划</div>
          </div>
          <div class="threebanner">
            <CartBoxtow v-for="i in Cart2Array" :width="'39.900vw'" :height="'16.571952rem'">
              <cartBoxTowContent :image="i.image" :text="i.text"></cartBoxTowContent>
            </CartBoxtow>
            <!-- <CartBoxtow :width="'7.793vw'" :height="'11.5083vh'"></CartBoxtow>
            <CartBoxtow :width="'7.793vw'" :height="'11.5083vh'"></CartBoxtow> -->
          </div>
        </div>
      </div>
      <div class="right">
        <div class="blist">
          <StructureButton> </StructureButton>
        </div>
        <div class="carts">
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'" :title="'生态保护红线'">
            <CircleChart :centerValue="80" :showLabel="true" centerLabel="数据数据" :dataItems="ecologicalData"
              :width="'55.3472rem'" :height="'32.3712rem'" :isCong="true" />
          </CartBoxone>
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'">
            <CircleChart title="永久基本农田保有量（万亩）" :centerValue="80" centerLabel="总计人口" legend="right"
              :dataItems="farmlandData" :width="'55.3472rem'" :height="'32.3712rem'" :isCong="true" />
          </CartBoxone>
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'">
            <BarCharts :x-axis-data="['一月', '二月', '三月', '四月', '五月']" :series-data="[
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
            ]" theme="dark" :horizontal="false" />
          </CartBoxone>
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'">
            <gauges></gauges>
          </CartBoxone>
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'">
            <BarCharts :x-axis-data="['一月', '二月', '三月', '四月', '五月']" :series-data="[
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
            ]" theme="dark" :horizontal="false" />
          </CartBoxone>
          <CartBoxtow :width="'60.5rem'" :height="'34.1rem'">
            <ProgressAll :isMax="true" :progwidth="' 39.88rem'"
              :data="[{ icon: 'icon-1', name: '生态保护红线', value: 80 }, { icon: 'icon-2', name: '生态保护红线', value: 80 }, { icon: 'icon-3', name: '生态保护红线', value: 80 }]">
            </ProgressAll>
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
  gap: 2rem;
}

.circle {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* .header {
  width: 100vw;
  height: 10.0694vh;
  border-radius: 0 0 0 0;
  opacity: 1;
  background: var(--header-brackground);
  margin-bottom: 1.7361vh;
} */

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
    width: 145.2rem;
    height: 122.8rem;
    opacity: 1;
    align-items: start;

    .one {
      z-index: 1;
      width: 126.0rem;
      height: 60rem;
      border-radius: 1。15rem;
      opacity: 1;
      border: 0.1rem solid #2c3534;
      background: var(--backgrouend-tow);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .titles {
        z-index: 2;
        width: 122.0rem;
        height: 10%;
        /* opacity: 1; */
        border-radius: 0.0977vw;
        border: 0.1rem solid #314347;
        background: linear-gradient(90deg, #2a5934 0%, #1e3033 100%);
        margin-top: 1rem;

        .test1 {
          width: 30.8rem;
          height: 100%;
          z-index: 100;
          color: #fff;
          font-size: 2.8rem;
          display: flex;
          align-items: center;
          margin-left: 3rem;
        }
      }

      .onebanner {
        width: 122.0rem;
        height: 85%;
        /* background-color: #fff; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      }
    }

    .two {
      width: 125.8rem;
      height: 34.89994rem;
      border-radius: 11.5px;
      opacity: 1;
      border: 1px solid #2c3535;
      background: var(--backgrouend-tow);
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;

      .titles {
        z-index: 2;
        width: 122.0rem;
        /* height: 10%; */
        height: 17%;
        /* opacity: 1; */
        border-radius: 0.5rem;
        border: 0.1rem solid #314347;
        background: linear-gradient(90deg, #2a5934 0%, #1e3033 100%);
        margin-top: 1.5rem;

        .test1 {
          width: 37rem;
          height: 100%;
          z-index: 100;
          color: #fff;
          font-size: 2.8rem;
          display: flex;
          align-items: center;
          margin-left: 3rem;
        }
      }

      .towbanner {
        width: 122.0rem;
        height: 85%;
        /* background-color: #fff; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      }
    }

    .three {
      width: 125.8rem;
      height: 25.49995rem;
      border-radius: 1.15rem;
      opacity: 1;
      border: 0.1rem solid #2c3534;
      background: var(--backgrouend-tow);
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .titles {
        z-index: 2;
        width: 122.0rem;
        height: 22%;
        /* opacity: 1; */
        border-radius: 0.5rem;
        border: 1px solid #314347;
        background: linear-gradient(90deg, #2a5934 0%, #1e3033 100%);
        margin-top: 1.1rem;

        .test1 {
          width: 24.199rem;
          height: 100%;
          z-index: 100;
          color: #fff;
          font-size: 2.8rem;
          display: flex;
          align-items: center;
          margin-left: 3rem;
        }
      }

      .threebanner {
        width: 121.19rem;
        height: 70%;
        /* background-color: #fff; */
        display: flex;
        justify-content: space-around;
        align-content: center;
      }
    }
  }

  .right {
    width: 125.6rem;
    align-items: end;
    height: 123.000048rem;
    border-radius: 1.6rem;
    opacity: 1;
    border: 0.1rem solid #456655;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
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
