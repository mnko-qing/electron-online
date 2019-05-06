<template>
  <div class="createTemplate">
    <p class="tips">Ps:添加模板字段前,请先填写模板相关细则!</p>

    <div class="">
      <label>模板分类：</label>
      <Select 
        filterable
        style="width:auto"
        v-model="templateConfig.classify">
        <Option 
          v-for="item in cityList" 
          :value="item.value" 
          :key="item.value">
          {{ item.label }}
        </Option>
      </Select>
    </div>

    <Spin size="large" fix v-if="loading"></Spin>
  </div>
</template>

<script>
import { tableData } from './interface'
import { templateTableConfig } from './tableConfig'
export default {
  name: 'createTemplate',
  data (){
    return {
      loading:true,
      templateConfig: {
        classify: "",
        relCodeRule: "",
        isShowGis:false,
        type: "",
        sysTemp: "",
        name: "",
        code: ""
      },
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 500);
  },
  methods: {
    create() {

    },
  },
  components:{

  }
}
</script>

<style lang='less' scoped>
  @import "../../../common/less/color.less";
  .createTemplate {
    .tips {
      color: #e6a23c;
    }
  }
</style>

