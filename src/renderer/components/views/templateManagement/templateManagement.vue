<template>
  <div class="templateManagement">
    <div v-if="parentShow">
      <Input 
        search
        v-model="templateName"
        placeholder="搜索模板名称" 
        style="width: auto" />

      <Button 
        type="primary" 
        class="create" 
        @click="create">
        创建模板
      </Button>
      
      <div class="tableArea">
        <Table 
          stripe 
          size="small" 
          :columns="columns" 
          :data="tableData">
        </Table>
      </div>

      <Spin size="large" fix v-if="loading"></Spin>
    </div>

    <router-view v-if="!parentShow"></router-view>
  </div>
</template>

<script>
import { tableData } from './interface'
import { templateTableConfig } from './tableConfig'
export default {
  name: 'templateManagement',
  data (){
    return {
      columns: [],
      tableData: [],
      loading:true,
      parentShow:true,
      templateName:'',
    }
  },
  created () {
    this.columns = templateTableConfig
    this.tableData = tableData.data.datalist
    setTimeout(() => {
      this.loading = false
    }, 500);
  },
  methods: {
    create() {
      this.parentShow = false
      this.$router.push({name:'createTemplate'})
    },
  },
  components:{

  }
}
</script>

<style lang='less' scoped>
  @import "../../../common/less/color.less";
  .templateManagement {
    height: calc(~'100% - 100px');
    &>div:first-child {
      width: 100%;
      height: 100%;
      .create {
        float: right;
      }
      .tableArea {
        margin-top: 20px;
        height: calc(~'100% - 50px');
        overflow: auto;
      }
    }
  }
</style>

