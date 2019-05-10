<template>
  <div class="dictionaryManagement">
    <Input search v-model="dicType" placeholder="搜索字典类型"/>
    <Input search v-model="dicName" placeholder="搜索字典名称"/>

    <Button 
      type="primary" 
      class="create" 
      @click="create">
      创建字典
    </Button>
    
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
  },
  components:{

  }
}
</script>

<style lang='less' scoped>
  @import "../../../common/less/color.less";
  
</style>

