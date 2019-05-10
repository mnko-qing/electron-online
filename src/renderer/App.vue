<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  @import "./common/less/reset.less";
  @import "./common/less/common.less";
  @import "./common/less/ivew-custom.less";
  body{
    background-color: transparent !important; 
  }
  #app{
    width: 100%;
    height: 100%;
    -webkit-app-region: drag;
  }
  ::-webkit-scrollbar {
    width: 7px;
    border-radius: 50%;
    background-color: #f3f3f5;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
</style>
