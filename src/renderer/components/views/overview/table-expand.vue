<template>
  <Table 
    stripe 
    size="small" 
    class="expand-table"
    :showHeader="false" 
    :columns="columns" 
    :data="row"> 
  </Table>
</template > 
</template>

<script>
  export default {
    props: ['row'],
    data() {
      return {
        columns:[
          {
            type: 'expand',
            width: 30,
            render: (h, params) => {
              if(params.row.sub && params.row.sub.length) {
                this.columns.type = ''
                this.columns.width = 0
              }
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
            filters: [],
            filterMultiple: false,
            filterMethod (value, row) {

            }
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
        ]
      }
    }
  }
</script>

<style>
  .expand-row {
    margin-bottom: 16px;
  }
  td.ivu-table-expanded-cell {	
    padding:0 !important;	
  }
  .expand-table .ivu-icon-ios-arrow-forward:before {
    display: none;
  }
</style>