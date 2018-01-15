<template>
  <transition name="fade" mode="out-in">
    <div class="login-wrap">
    	<div class="logo">
    		<img src="../../../static/img/logo.jpg">
    	</div>
      <h3 class="title">登录</h3>
      <input class="txt" type="text" placeholder="请输入用户名" ref='loginUser'>
      <input class="txt" type="password" placeholder="请输入密码" ref='loginPwd'>
      <button class="btn" @click='login'>登录</button>
      <span class="log-reg" @click='handleToRegister'>没有账号？马上注册</span>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  export default{
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleToRegister () {
        this.$emit('toRegister')
      },
      login () {
        if (this.$refs.loginUser.value === '' || this.$refs.loginPwd.value === '') {
          alert('请输入用户名或密码')
        } else {
          this.username = this.$refs.loginUser.value()
          this.password = this.$refs.loginPwd.value()
          axios.get('api/userlogin.json')
               .then(this.handleUserLoginSucc.bind(this))
               .catch(this.handleUserLoginErr.bind(this))
        }
      },
      handleUserLoginSucc (res) {
        if (res) {
          if (res.data) {
            if (res.data.isLogin) {
              this.$router.push('/')
            }
          }
        }
      }
    }
  }
</script>

<style>
  .login-wrap{
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
