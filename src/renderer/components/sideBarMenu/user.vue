<template>
  <div class="user">
    <header>账号</header>
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
    footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      border-top: 1px solid #e8eaec;
    }
    .pl-10 {
      padding-left: 10px;
    }
    .no-text-select {
      -webkit-user-select: none;
      cursor:default;
    }
  }
</style>

