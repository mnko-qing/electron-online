<template>
  <div class="user">
    <header>账号</header>
    <div class="main">
      <Icon size="50" type="ios-contact"/>
      <span>用户名</span>
      <Collapse simple>
        <Panel name="1" hide-arrow>
          <Icon size="16" type="ios-information-circle-outline" />
          <span>关于在线协作</span>
          <Icon size="16" class="right-arrow" type="ios-arrow-forward" />
          <p slot="content">
            在线协作吧啦吧啦吧啦吧啦一大堆！
          </p>
        </Panel>
    </Collapse>
    </div>
    <footer class="no-text-select" @click="exit">
      <Icon type="ios-power-outline" size="18"/>
      <span class="pl-10">注销</span>
    </footer>
  </div>
</template>

<script>

export default {
  name:'user',
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
  methods:{
    exit() {
      
    }
  }
}
</script>

<style lang="less" scoped>
  .user {
    width: 100%;
    height: 100%;
    color: black;
    position: relative;
    font-size: 14px;
    header,footer {
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
    }
    header {
      border-bottom: 1px solid #e8eaec;
    }
    .main {
      padding-top: 20px;
      &>i:first-child {
        color: #d1cf94;
        padding-right: 20px;
        padding-left: 30px;
      }
      .ivu-collapse-simple {
        margin-top: 20px;
        .ivu-collapse-header {
          &>i:first-child {
            margin-right: 0;
          }
          .right-arrow {
            float: right;
            line-height: 38px;
          }
        }
      }
    }
    footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      border-top: 1px solid #e8eaec;
    }
    .pl-10 {
      padding-left: 10px;
    }
  }
</style>

