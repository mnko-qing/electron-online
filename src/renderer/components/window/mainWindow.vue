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
        <h3>{{pageName}}</h3>
        <router-view />
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
      window:null,
      isMaximize:false,
      pageName:'',
    }
  },
  created() {
    this.window = remote.getCurrentWindow()

    // 解决双击标题栏窗口最大化和还原时图标未跟随更改问题
    // 想过使用window.isMaximized()事件
    // 但是这个事件只有在窗口重载时才会响应 不知道是不是无边框窗口的问题
    // 还有一种方案是自己实现拖拽 和双击事件 但只是这一小个功能没有必要搞太复杂

    this.window.on('maximize',() => {
      this.isMaximize = true
    })

    this.window.on('unmaximize',() => {
      this.isMaximize = false
    })
  },
  methods: {
    switchSkin() {
      // 后期整理在开发
    },
    minimize() {
      this.window.minimize()
    },
    maximize() {
      this.isMaximize ? this.window.unmaximize() : this.window.maximize()
    },
    close() {
      this.window.destroy()
    },
    switchPage(name) {
      this.pageName = name.label
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
      color: white;
      background-color: @sign-header-background;
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
        h3 {
          font-size: 15px;
          height: 40px;
          line-height: 40px;
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