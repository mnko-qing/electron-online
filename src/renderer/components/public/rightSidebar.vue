<template>
  <div class="rightSidebar" @click.stop>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name:'rightSidebar',
  data() {
    return {
      
    }
  },
  mounted() {
    
  },
}
</script>

<style lang="less" scoped>
  .rightSidebar {
    width: 300px;
    position: fixed;
    z-index: 9;
    top: 36px;
    right: 1px;
    bottom: 1px; //有1px的边框
    background-color: white;
    box-shadow: -2px 0 15px #c4dffc;
  }
</style>

