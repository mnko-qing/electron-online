<template>
  <div class="sign-in">
    <header>
      <Icon type="ios-close" size="36" @click="close" />
      <span>在线协作</span>
    </header>
    <div class="sign-wrapper">
      <Icon type="ios-contact-outline user" size="100"/>
      <Icon type="ios-contacts-outline switch-user" size="36" title="切换账号" />
      <div class="form">
        <Input clearable v-model="username" placeholder="用户名"/>
        <span>注册账号</span>
        <Input clearable v-model="password" type="password" placeholder="密码"/>
        <span>忘记密码</span>
        <p v-if="errorTip.length" style="color:red">
          <Icon type="ios-alert-outline" size="16"/>{{errorTip}}
        </p>
        <Checkbox v-model="remember">记住密码</Checkbox>
        <Checkbox v-model="autoSign">自动登录</Checkbox>
        <Button type="primary" class="submit" @click="submit">登录</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer as ipc,remote } from 'electron'
export default {
  name: 'signIn',
  data (){
    return {
      username:'',
      password:'',
      autoSign:'',
      remember:'',
      errorTip:'',
    }
  },
  methods: {
    close() {
      ipc.send('close')
    },
    submit() {
      if(!this.username.length){
        this.errorTip = '请输入用户名!'
        return
      }
      if(!this.password.length){
        this.errorTip = '请输入密码!'
        return
      }
      this.errorTip = ''
      ipc.send('resize')
      this.$router.push({ name: "landing-page" })
    }
  }
}
</script>

<style lang='less' scoped>
  @import "../../common/less/color.less";
  .sign-in{
    width: 100%;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
    background-color: @sign-body-background;
    header{
      background: @sign-header-background;
      text-align: center;
      font-size: 36px;
      line-height: 4.5;
      color: @font-general;
      height: 45%;
      position: relative;
      i {
        position: absolute;
        top: 0;
        right: 0;
        color: @icon-blur-color;
        -webkit-app-region: no-drag;
        &:hover {
          color: @icon-foucs-color;
        }
      }
    }
    .sign-wrapper{
      height: 55%;
      position: relative;
      -webkit-user-select: none;
      -webkit-app-region: no-drag;
      .form {
        position: absolute;
        left: 140px;
        padding-top: 20px;
        & > div,button {
          width: 185px;
        }
        label:hover {
          color: @sign-header-background;
        }
        span {
          font-size: 14px;
          color: @sign-header-background;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .user{
        position: absolute;
        top: 20px;
        left: 30px;
      }
      .switch-user {
        position: absolute;
        bottom: 5px;
        left: 10px;
        cursor: pointer;
      }
      .ivu-checkbox-wrapper{
        margin: 10px 30px 10px 0;
        font-size: 14px;
      }
      .submit{
        padding-left: 45px;
        letter-spacing: 30px;
      }
    }
  }
</style>

<style>
  .sign-wrapper .ivu-input{
    font-size: 14px;
  }
</style>

