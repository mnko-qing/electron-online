<template>
  <div class="highcharts"></div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  name:'highcharts',
  props:['options'],
  data() {
    return {}
  },
  mounted() {
    // 全局配置
    Highcharts.setOptions({
      chart: {

      },
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

