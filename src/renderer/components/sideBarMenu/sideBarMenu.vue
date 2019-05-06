<template>
  <div class="sideBarMenu">
    <Icon 
      size="24" 
      type="ios-menu-outline" 
      @click="isOpenMenu = !isOpenMenu"/>

    <Menu 
      accordion 
      v-if="isOpenMenu"
      :active-name="menu[0].name" 
      @on-select="selectMenu">
      
      <template v-for="item in menu">

        <MenuItem 
          :name="item.name"  
          :key="item.name"
          v-if="!item.child">

          <Icon :type="item.icon" />{{item.label}}
        </MenuItem>

        <Submenu :name="item.name" :key="item.name" v-else>

          <template slot="title">
            <Icon :type="item.icon" />{{item.label}}
          </template>
          
          <template v-for="sub in item.child">

            <MenuItem 
              :name="sub.name" 
              :key="sub.name"
              v-if="!sub.child">
              {{sub.label}}
            </MenuItem>

            <Submenu :name="sub.name" :key="sub.name" v-else>

              <template slot="title">{{sub.label}}</template>

              <MenuItem 
                :name="sSub.name"
                v-for="sSub in sub.child"
                :key="sSub.name">
                {{sSub.label}}
              </MenuItem>
              
            </Submenu>

          </template>

        </Submenu>

      </template>

    </Menu>

    <div v-else class="retractMenu">
      <Icon 
        v-for="i in menu" 
        :key="i.icon" 
        :type="i.icon"
        :title="i.label" 
        @click="selectMenu(i)"/>

      <Icon type="ios-skip-forward" @click="isOpenMenu = true"/>
      <Icon type="ios-contact"/>
      <Icon type="ios-settings-outline" />
    </div>

    <div class="user-setting" v-if="isOpenMenu">
      <Icon type="ios-contact" size="50" />
      <span>用户名</span>
      <Icon type="ios-settings-outline" size="24" />
    </div>
  </div>
</template>

<script>
import menuConfig from './menuConfig'
export default {
  name: 'sideBarMenu',
  data (){
    return {
      isOpenMenu:true, 
      menu:[]
    }
  },
  created() {
    this.menu = menuConfig

    // active-name 无法自动触发 on-select  手动触发
    this.selectMenu(this.menu[0])
  },
  methods: {
    selectMenu(name) {
      let menuItem = name
      if(typeof name == 'string') {
        for(let menu of this.menu) {
          if(name == menu.name) {
            menuItem = menu
            break
          } else {
            let recursionSub = this.recursionQuerySubmenu(menu,name)
            if(recursionSub) {
              menuItem = recursionSub
              break
            }
          }
        }
      }
      this.$emit('switchPage',menuItem)
    },
    recursionQuerySubmenu(menu,name) {
      if(menu.child && menu.child.length) {
        for(let menuItem of menu.child) {
          if(menuItem.name == name) {
            return menuItem
          } else {
            if(menuItem.child && menuItem.child.length) {
              return this.recursionQuerySubmenu(menuItem,name)
            }
          }
        }
      }
    }
  },
}
</script>

<style lang='less' scoped>
  @import "../../common/less/color.less";
  .sideBarMenu {
    background-color: #f3f3f5;
    &>i:first-child {
      padding: 10px 20px;
      &:hover {
        color: #5cadff;
      }
    }
    .ivu-menu-light {
      height: calc(~'100% - 70px - 24px - 20px');
      overflow-y: auto;
      background-color: transparent;
      &:after {
        width: 0;
      }
      .ivu-menu-item>i {
        margin-right: 10px;
      }
    }
    .user-setting {
      width: 100%;
      height: 70px;
      line-height: 70px;
      border-top: 1px solid #dbdbe0;
      &>i:first-child {
        color: #d1cf94;
        margin-left: 20px;
      }
      &>i:last-child {
        margin-left: 60px;
        &:hover {
          color: #5cadff;
        }
      }
      span {
        padding: 0 10px;
        font-size: 14px;
      }
    }

    // 收起菜单样式
    .retractMenu {
      display: flex;
      flex-direction:column;
      align-items:center;
      i {
        font-size: 24px;
        padding: 10px 20px;
        
        &:nth-last-child(1) {
          position: absolute;
          bottom: 0;
        }
        &:nth-last-child(2) {
          color: #d1cf94;
          position: absolute;
          bottom: 44px;
          border-top: 1px solid #dbdbe0;
        }
        &:hover {
          color: #5cadff;
        }
      }
    }
  }
</style>