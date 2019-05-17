<template>
  <div class="templateManagement">
    <div v-if="parentShow">
      <PageHead 
        name="模板" 
        :searchValue="templateName"
        @create="create"
        @search="getList">
      </PageHead>
      
      <Table 
        stripe 
        size="small" 
        :columns="columns" 
        :data="tableData">
      </Table>

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
    }, 200)
  },
  watch:{
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.parentShow = toDepth < fromDepth ? true : false
    }
  },
  methods: {
    create() {
      this.parentShow = false
      this.$router.push({name:'createTemplate'})
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
  .templateManagement {
    height: calc(~'100% - 100px');
    &>div:first-child {
      width: 100%;
      height: 100%;
    }
  }
</style>

