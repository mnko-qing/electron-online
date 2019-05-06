<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'disbook'
  }
</script>

<style>
  @import "./common/less/reset.css";
  body{
    background-color: transparent !important; 
  }
  #app{
    width: 100%;
    height: 100%;
    -webkit-app-region: drag;
  }
  ::-webkit-scrollbar {
    width: 3px;
  }
</style>
