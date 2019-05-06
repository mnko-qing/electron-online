<template>
  <div class="mainWindow">
    <header>
      <span>在线协作</span>
      <nav>
        <ul>
          <li @click="switchSkin"><Icon type="ios-shirt" size="16" /></li>
          <li @click="minimize"><Icon class="minimize" size="16" /></li>
          <li @click="maximize">
            <Icon 
              size="16"
              :class="isMaximize ? 
              'ivu-icon-ios-browsers-outline' : 'maximize'" />
          </li>
          <li @click="close"><Icon type="ios-close close" size="28" /></li>
        </ul>
      </nav>
    </header>
    <div class="main">
      <SideBarMenu @switchPage="switchPage"></SideBarMenu>
      <div class="pages">
        <Breadcrumb>
          <BreadcrumbItem 
            v-for="(item,index) in breadcrumb"
            :key="index" 
            :to="item.router">
            {{item.label}}
          </BreadcrumbItem>
        </Breadcrumb>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { remote } from 'electron'
import SideBarMenu from '../sideBarMenu/sideBarMenu'
export default {
  name: 'mainWindow',
  data (){
    return {
      isMaximize:false,
      breadcrumb:[],
    }
  },
  methods: {
    switchSkin() {
      // 后期整理在开发
    },
    minimize() {
      remote.getCurrentWindow().minimize()
    },
    maximize() {
      const mainWindow = remote.getCurrentWindow()
      this.isMaximize ? mainWindow.unmaximize() : mainWindow.maximize()
      this.isMaximize = !this.isMaximize
    },
    close() {
      remote.getCurrentWindow().destroy()
    },
    switchPage(name) {
      this.breadcrumb[0] = name
      this.$router.push({name:name.name})
    },
  },
  components:{SideBarMenu}
}
</script>

<style lang='less' scoped>
  @import "../../common/less/color.less";
  .mainWindow {
    background-color: white;
    border:1px solid @sign-header-background;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    header {
      width: 100%;
      height: 35px;
      line-height: 35px;
      background-color: @sign-header-background;
      color: white;
      span {
        font-size: 14px;
        line-height: 35px;
        padding-left: 15px;
        letter-spacing: 1px;
      }
      nav {
        float: right;
        height: 100%;
        -webkit-app-region: no-drag;
        ul {
          display: flex;
          li {
            width: 40px;
            height: 100%;
            &:hover {
              background-color: #5cadff;
            }
            &:last-child:hover {
              background-color: red;
            }
            i {
              width: 100%;
              height: 100%;
              text-align: center;
            }
            .minimize:before,.maximize:before {
              content: '';
              display: inline-block;
            }
            .minimize:before {
              width: 10px;
              height: 1px;
              margin-bottom: 7px;
              background-color: white;
            }
            .maximize:before {
              width: 11px;
              height: 11px;
              margin-bottom: 2px;
              border: 1px solid white;
            }
          }
        }
      }
    }
    .main {
      -webkit-app-region: no-drag;
      width: 100%;
      height: calc(~'100% - 35px');
      position: relative;
      display: flex;
      .pages {
        flex: 1;
        margin: 0 20px;
        overflow: hidden;
        .ivu-breadcrumb {
          margin: 0;
          height: 40px;
          line-height: 40px;
          font-size: 15px;
          border-bottom: 1px solid #dddde1;
        }
        &>div {
          margin: 20px 0;
          font-size: 14px;
          position: relative;
        }
      }
    }
  }
</style>