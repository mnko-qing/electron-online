<template>
  <div class="overview">
    <HighCharts 
      ref="orderStatistics" 
      :options="orderStatisticsOptions">
    </HighCharts>
  </div>
</template>

<script>
import HighCharts from '@/components/public/highCharts'
export default {
  name: 'overview',
  data (){
    return {
      orderStatisticsOptions:{
        chart:{
          type: 'column',
          margin: 75,
          options3d: {
            enabled: true,
            alpha: 20,
            beta: 0,
            depth: 100,
            viewDistance: 100,
          },
        },
        title:{text: '工单数量统计'},
        plotOptions: {
          column: {
            depth: 35
          }
        },
        xAxis:{categories:[
          '集中规划',
          '集中分析',
          '集中优化',
          '集中维护',
          '高价值分析',
          '其他'
        ]},
        yAxis:{
          title:{
            text:'创建工单数'
          }
        },
        series:[{
          name:'工单数',
          data:[2, 3, 5, 4, 6, 3],
        }]
      },
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    init() {
      
    },
  },
  components:{
    HighCharts
  }
}
</script>

<style lang='less' scoped>
  @import "../../../common/less/color.less";
  
</style>