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
        chart:{type: 'area'},
        title:{text: '工单统计'},
        xAxis:{categories:['day','week','mounth']},
        yAxis:{title:'创建工单数'},
        series:[
          {
            name:'流程1',
            data:[1, 0, 4],
          },
          {
            name:'流程2',
            data:[2, 2, 2],
          }
        ]
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