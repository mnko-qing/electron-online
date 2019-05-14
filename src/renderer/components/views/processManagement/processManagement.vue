<template>
  <div class="processManagement">
    <PageHead 
      name="流程" 
      :searchValue="processName"
      @create="create"
      @search="getList">
    </PageHead>
    
    <Table 
      stripe 
      size="small" 
      highlight-row
      :columns="columns" 
      :data="tableData"
      @on-row-click="rowClick">

      <template slot-scope="{ row, index }" slot="operate" v-if="row.operate">
        <Icon 
          size="22" 
          title="删除"
          type="ios-trash-outline" 
          @click="deletePrecess(index,$event)"/>

        <Icon 
          size="22" 
          title="编辑"
          type="ios-create-outline"
          @click="editPrecess(index,$event)" />
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  name: 'processManagement',
  data (){
    return {
      processName:'',
      prveIndex:null,
      columns: [
        {
          title:'流程名称',
          key: 'name',
          align:'center'
        },
        {
          title:' ',
          key:'operate',
          width:100,
          slot: 'operate',
        },
        {
          title:'流程描述',
          key: 'des',
          align:'center'
        },
        {
          title:'流程标识',
          key: 'mark',
          align:'center'
        },
      ],
      tableData: [
        {
          name:'测试流程001',
          des:'就是一个简单的测试流程',
          mark:'test_process_001',
          operate:false
        },
        {
          name:'测试流程002',
          des:'就是一个简单的测试流程',
          mark:'test_process_002',
          operate:false
        },{
          name:'测试流程003',
          des:'就是一个简单的测试流程',
          mark:'test_process_003',
          operate:false
        },{
          name:'测试流程004',
          des:'就是一个简单的测试流程',
          mark:'test_process_004',
          operate:false
        },{
          name:'测试流程005',
          des:'就是一个简单的测试流程',
          mark:'test_process_005',
          operate:false
        },{
          name:'测试流程006',
          des:'就是一个简单的测试流程',
          mark:'test_process_006',
          operate:false
        },
      ],
    }
  },
  methods: {
    create() {

    },
    getList(value) {
      console.log('search',value)
    },
    rowClick(row) {
      // 使用on-current-change事件由于更改了表格数据 产生了重绘导致前一个数据总是返回null
      if(this.prveIndex !== null) {
        this.tableData[this.prveIndex].operate = false
      }
      const currentRowIndex = this.tableData.findIndex( data => data.mark == row.mark)
      this.tableData[currentRowIndex].operate = !row.operate
      this.prveIndex = currentRowIndex
    },
    deletePrecess(index,event) {
      event.stopPropagation()
      console.log('delPrecess',index)
    },
    editPrecess(index,event) {
      event.stopPropagation()
      console.log('editPrecess',index)
    }
  },
  components:{
    PageHead:(() => import('@/components/public/pageHead'))
  }
}
</script>

<style lang='less' scoped>
  @import "../../../common/less/color.less";
</style>

