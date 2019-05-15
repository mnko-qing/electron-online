<template>
  <div class="codingRules">
    <PageHead 
      name="编码" 
      :searchValue="code"
      @create="create"
      @search="getList">
    </PageHead>
    
    <Table 
      stripe 
      size="small" 
      :columns="columns" 
      :data="tableData">
    </Table>
  </div>
</template>

<script>
export default {
  name: 'codingRules',
  data (){
    return {
      code:'',
      columns: [
        {
          title: '规则名称',
          key: 'rule_name',
        },
        {
          title: '制定人',
          key: 'create_user_name',
        },
        {
          title: '工单来源',
          key: 'form_source',
          // align:'center'
        },
        {
          title: '编码规则',
          key: 'code_rule_view',
          // align:'center'
        },
        {
          title: '规则示例',
          key: 'rule_example',
          // align:'center'
        },
        {
          title: '创建时间',
          key: 'crt_time',
          // align:'center',
          sortable: true
        },
      ],
      tableData: [
        {
            "is_effective":"1",
            "code_rule_view":"省份-工单类型-地市-区县-网络类型-业务类型-日期-编号",
            "rule_name":"投诉编码规则",
            "rule_example":"YN_TS_KM_WH001_L_V_20180930_00001",
            "form_source":"Nokia",
            "id":"168738e509d84007bdf610835bb91495",
            "generate_string":"province-order_type-city-region-net_type-business_type-rule_date-batch_no"
        },
        {
            "is_effective":"1",
            "code_rule_view":"省份-工单类型-地市-区县-网络类型-观察粒度-规则大类-日期-编号",
            "rule_name":"分析编码规则",
            "rule_example":"YN_FX_KM_WH001_L_D_DW_XQ_20180930_01169",
            "form_source":"Nokia",
            "id":"6aaef9a40f9c4f3bb89f7dcd23d808de",
            "generate_string":"province-order_type-city-region-net_type-view_unit-big_subject-rule_date-batch_no"
        },
        {
            "is_effective":"1",
            "code_rule_view":"省份-工单类型-地市-区县-网络类型-日期-编号",
            "rule_name":"规划编码规则",
            "rule_example":"YN-GH-KM-WH001-T-20180930-00001",
            "form_source":"Nokia",
            "id":"17ab5774043f43c2b24340310602977d",
            "generate_string":"province-order_type-city-region-net_type-rule_date-batch_no"
        },
        {
            "is_effective":"1",
            "code_rule_view":"省份-工单类型-地市-区县-日期-编号",
            "rule_name":"价值编码规则",
            "rule_example":"YN-GH-KM-WH001-20180930-00001",
            "form_source":"Nokia",
            "id":"b021af07ecd34c46af4c1c88db60e856",
            "generate_string":"province-order_type-city-region-rule_date-batch_no"
        },
        {
            "is_effective":"1",
            "code_rule_view":"集中分析-昆明-五华区-时间日期-编号",
            "create_user_name":"admin",
            "rule_name":"工单类型-地市-区县-时间日期-编号",
            "rule_example":"FX-KM-WH065-20190412-00059415",
            "form_source":"Nokia",
            "crt_time":"2019-04-12 10:26:13",
            "remark":"",
            "id":"6a9dcbc246ac4575bd97b76afcf1f893",
            "generate_string":"order_type-city-region-rule_date-batch_no"
        },
        {
            "is_effective":"1",
            "code_rule_view":"集中分析-昆明-五华区-FDD-需求阶段-时间日期-编号",
            "create_user_name":"admin",
            "rule_name":"工单类型-地市-区县-网络类型-阶段-时间日期-编号",
            "rule_example":"FX-KM-WH065-F-XQJD-20180930-00005",
            "form_source":"Nokia",
            "crt_time":"2018-09-30 09:02:26",
            "remark":"",
            "id":"0d1c2af4e3314bb3875846b82ce70c34",
            "generate_string":"order_type-city-region-net_type-section-rule_date-batch_no"
        },
        {
            "is_effective":"1",
            "code_rule_view":"集中分析-昆明-五华区-时间日期-编号",
            "create_user_name":"admin",
            "rule_name":"工单类型-地市-区县-时间日期-编号",
            "rule_example":"FX-KM-WH065-20190314-00029497",
            "form_source":"Nokia",
            "crt_time":"2018-09-19 11:05:35",
            "remark":"",
            "id":"429de019f8564248a9015460689d1038",
            "generate_string":"order_type-city-region-rule_date-batch_no"
        },
        {
            "is_effective":"1",
            "code_rule_view":"集中分析-昆明-五华区-FDD-时间日期-编号",
            "create_user_name":"admin",
            "rule_name":"工单类型-地市-区县-网络类型-时间日期-编号",
            "rule_example":"FX-KM-WH065-F-20180930-00001",
            "form_source":"Nokia",
            "crt_time":"2018-09-18 16:34:11",
            "remark":"",
            "id":"5caef4ac6f254b08b60e70973cd9b47d",
            "generate_string":"order_type-city-region-net_type-rule_date-batch_no"
        }
      ],
    }
  },
  methods: {
    create() {
      console.log('create')
    },
    getList(value) {
      console.log('search',value)
    },
  },
  components:{
    PageHead:(() => import('@/components/public/pageHead'))
  }
}
</script>

<style lang='less' scoped>
  @import "../../../common/less/color.less";
</style>

