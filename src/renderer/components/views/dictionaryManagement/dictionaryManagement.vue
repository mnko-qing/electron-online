<template>
  <div class="dictionaryManagement">
    <PageHead 
      name="字典" 
      :searchValue="dicName"
      @create="create"
      @search="getList">

      <Input 
        search 
        slot="search"
        class="ml-15"
        v-model="dicType" 
        @on-search="getList"
        placeholder="搜索字典类型"/>
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
  name: 'dictionaryManagement',
  data (){
    return {
      dicType:'',
      dicName:'',
      columns:[],
      tableData:[]
    }
  },
  methods: {
    create() {
      console.log('create dictionary')
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

