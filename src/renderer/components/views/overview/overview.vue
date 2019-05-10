<template>
  <div class="overview">
    <HighCharts 
      ref="orderStatistics" 
      :options="orderStatisticsOptions">
    </HighCharts>

    <Table 
      stripe 
      size="small" 
      :columns="columns" 
      :data="tableData">
    </Table>
  </div>
</template>

<script>
import expandRow from './table-expand.vue'
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
        series:[
          {
            name:'工单数',
            data:[2, 3, 5, 4, 6, 3],
          },{
            type: 'spline',
            name: '平均值',
            data: [3, 2.67, 3, 6.33, 3.33,4],
            zones:[{
              color: '#f7a35c',
            }],
            marker: {
              lineWidth: 2,
              lineColor: '#f7a35c',
              fillColor: '#7cb5ec' 
            }
          }
        ]
      },
      columns:[
        {
          type: 'expand',
          width: 30,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row.sub
              }
            })
          }
        },
        {
          title: '流程',
          key: 'process',
        },
        {
          title: '用户名',
          key: 'userName',
        },
        {
          title: '创建工单数',
          key: 'create',
          width:'150',
          align:'center',
          sortable: true
        },
        {
          title: '待办',
          key: 'need',
          align:'center',
          sortable: true
        },
        {
          title: '已办',
          key: 'create_time',
          align:'center',
          sortable: true
        },
        {
          title: '驳回',
          key: 'create_time1',
          align:'center',
          sortable: true
        },
        {
          title: '时间',
          key: 'time',
          sortable: true
        },
      ],
      tableData:[
        {
          process:'测试',
          userName:'admin',
          create:1,
          need:2,
          create_time:3,
          create_time1:4,
          time:'xxxx-xx-xx',
          sub:[
            {
              process:'测试1',
              userName:'admin1',
              create:1,
              need:1,
              create_time:13,
              create_time1:2,
              time:'xxxx-xx-xx1',
            }
          ]
        },
        {
          process:'测试',
          userName:'admin',
          create:32,
          need:231,
          create_time:321,
          create_time1:442,
          time:'xxxx-xx-xx',
        },
        {
          process:'测试',
          userName:'admin',
          create:32,
          need:231,
          create_time:321,
          create_time1:442,
          time:'xxxx-xx-xx',
        },{
          process:'测试',
          userName:'admin',
          create:32,
          need:231,
          create_time:321,
          create_time1:442,
          time:'xxxx-xx-xx',
        },{
          process:'测试',
          userName:'admin',
          create:32,
          need:231,
          create_time:321,
          create_time1:442,
          time:'xxxx-xx-xx',
        },{
          process:'测试',
          userName:'admin',
          create:32,
          need:231,
          create_time:321,
          create_time1:442,
          time:'xxxx-xx-xx',
        },
      ]
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
    HighCharts,
    expandRow
  }
}
</script>

<style lang='less' scoped>
  @import "../../../common/less/color.less";
</style>