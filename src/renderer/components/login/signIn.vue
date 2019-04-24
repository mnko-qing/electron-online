<template>
  <div class="sign-in">
    <header>在线协作</header>
    <div class="sign-wrapper">
      <div>
        <Icon type="ios-contact-outline user" />
      </div>
      <div>
        <Input clearable v-model="username" placeholder="用户名"/>
        <Input clearable v-model="password" type="password" placeholder="密码"/>
        <div v-if="errorTip.length" style="color:red">
          <Icon type="ios-alert-outline" size="16"/>{{errorTip}}
        </div>
        <Checkbox v-model="remember">记住密码</Checkbox>
        <Checkbox v-model="autoLogon" class="float-right">自动登陆</Checkbox>
        <Button type="primary" class="submit" @click="submit">登录</Button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'signIn',
  data (){
    return {
      username:'',
      password:'',
      autoLogon:'',
      remember:'',
      errorTip:'',
    }
  },
  methods: {
    submit() {
      const ipc = require('electron').ipcRenderer
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
    header{
      background: @theme-background;
      text-align: center;
      line-height: 4.5;
      font-size: 36px;
      color: #464c5b;
      height: 45%;
    }
    .sign-wrapper{
      height: 55%;
      &>div{
        float: left;
        height: 100%;
        padding-top: 20px;
      }
      .user{
        margin:0 10px 0 50px;
        font-size: 80px;
      }
      .ivu-input-wrapper{
        display: block;
      }
      .ivu-checkbox-wrapper{
        margin-top: 10px;
        font-size: 14px;
      }
      .float-right{
        float: right;
      }
      .submit{
        margin-top: 10px;
        width: 100%;
      }
    }
  }
</style>

<style>
  .sign-wrapper .ivu-input{
    font-size: 14px;
  }
</style>

