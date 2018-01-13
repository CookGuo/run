<template>
  <transition name="fade" mode="out-in">
    <div class="register-wrap">
      <div class="logo">
        <img src="../../../static/img/logo.jpg">
      </div>
      <h3 class="title">注册</h3>
      <input class="txt" type="text" placeholder="请输入用户名">
      <input class="txt" type="password" placeholder="请输入密码">
      <button class="btn">注册</button>
      <span class="log-reg" @click='handleToLogin'>已有账号？马上登录</span>
    </div>
  </transition>
</template>

<script>
  export default{
    methods: {
      handleToLogin () {
        this.$emit('toLogin')
      }
    }
  }
</script>

<style>
  .register-wrap{
    text-align:center;
    position: absolute;
    top: .88rem;
    bottom: 0;
    width: 100%;
  }
  .logo{
    padding: 1.2rem 0;
  }
  .title{
    color: #2c3e50;
    font-size: .36rem;
    font-weight: bold;
    line-height: .36rem;
    margin-bottom: .4rem;
  }
  .txt{
    width: 5rem;
    height: .4rem;
    line-height: .4rem;
    margin:0 auto;
    margin-bottom: .2rem;
    outline:none;
    padding: .2rem;
    border:1px solid #888;
  }
  .btn{
    display: block;
    width: 5.4rem;
    height: .8rem;
    line-height: .8rem;
    border:none; 
    background-color:#41b883; 
    color:#fff; 
    font-size: .32rem; 
    margin:0 auto .1rem;
  }
  .log-reg{cursor:pointer;}
  .log-reg:hover{color:#41b883;}
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
