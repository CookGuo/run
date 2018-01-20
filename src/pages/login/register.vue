<template>
  <transition name="fade" mode="out-in">
    <div class="register-wrap">
      <div class="logo">
        <img src="../../../static/img/logo.jpg">
      </div>
      <h3 class="title">用户注册</h3>
      <input class="txt" type="text" placeholder="请输入手机号" ref="username">
      <input class="txt" type="password" placeholder="请输入密码" ref="password">
      <div class="code">
        <input class="code-txt" type="text" placeholder="请输入验证码" ref="codenum">
        <button class="code-btn" @click='handleGetPhoneCode' ref='codeBtn'>获取验证码</button>
      </div>
      <button class="btn" @click="handleUserRegister">注册</button>
      <span class="log-reg" @click='handleToLogin'>已有账号？马上<a class="a-log">登录</a></span>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  export default{
    data () {
      return {
        code: ''
      }
    },
    methods: {
      handleToLogin () {
        this.$emit('toLogin')
      },
      handleUserRegister () {
        axios({  
          method:'post',
          url:'/static/registe.json',
          data: {
            username: this.$refs.username.value,
            password: this.$refs.password.value
          }
        })
        .then(this.handleUserRegisterSucc.bind(this))
        .catch(this.handleUserRegisterErr.bind(this))
      },
      handleUserRegisterSucc (res) {
        res = (res.data) ? res.data : null
        this.handleDataCorrect()
      },
      handleUserRegisterErr () {
        alert('用户名已存在')
      },
      handleGetPhoneCode () {
        this.$refs.codeBtn.innerHTML = '正在发送...'
        this.$refs.codeBtn.style.backgroundColor = '#ccc'
        axios.get('/static/reg.json')
        .then(this.handlePhoneCodeSucc.bind(this))
      },
      handlePhoneCodeSucc (res) {
        res = (res.data) ? res.data : null
        this.code = res.data.isCode
      },
      handleDataCorrect () {
        const inputCode = this.$refs.codenum.value
        if (inputCode !== this.code) {
          alert('验证码输入错误')
        } else if (inputCode === '') {
          alert('请输入验证码')
        } else if (inputCode === this.code) {
          this.$emit('toLogin')
        }
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
    border-radius: .4rem;
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
    border-radius: .4rem;
  }
  .log-reg{cursor:pointer;}
  .log-reg:hover{color:#41b883;}
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .code{
    width: 5.4rem;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    margin-bottom: .2rem;
  }
  .code-txt{
    width: 2.5rem;
    height: .4rem;
    line-height: .4rem;
    outline:none;
    padding: .2rem;
    border:1px solid #888;
    border-radius: .4rem;
  }
  .code-btn{
    display: block;
    width: 2rem;
    height: .82rem;
    line-height: .8rem;
    border:none; 
    background-color:#41b883; 
    color:#fff; 
    font-size: .32rem;
    border-radius: .4rem; 
  }
  .a-log{
    text-decoration: underline;
  }
</style>
