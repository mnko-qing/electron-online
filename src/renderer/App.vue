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
  #app{
    width: 100%;
    height: 100%;
  }
</style>
