<template>
  <div class="highcharts"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsDrilldown from 'highcharts/modules/drilldown'
import Highcharts3D from 'highcharts/highcharts-3d'

HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts)
Highcharts3D(Highcharts)

export default {
  name:'highcharts',
  props:['options'],
  data() {
    return {}
  },
  mounted() {
    // 全局配置
    Highcharts.setOptions({
      credits:{
        enabled:false
      }
    })
    const chart = new Highcharts.Chart(this.$el, this.options)
  },
}
</script>

<style lang="less" scoped>
  .highcharts {
    min-width: 500px;
  }
</style>

