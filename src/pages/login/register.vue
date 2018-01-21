<template>
  <transition name="fade" mode="out-in">
    <div class="register-wrap">
      <div class="logo">
        <img src="../../../static/img/logo.jpg">
      </div>
      <h3 class="title">用户注册</h3>
      <input class="txt" type="text" placeholder="请输入手机号" ref="username" @blur='handleBlur'>
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
        code: '',
        username: '',
        password: '',
        time: 59,
        isCodeNum: true,
        inputCode: ''
      }
    },
    methods: {
      handleToLogin () {
        this.$emit('toLogin')
      },
      handleUserRegister () {
        this.username = this.$refs.username.value
        this.password = this.$refs.password.value
        axios.get('/api/registe.json')
            .then(this.handleUserRegisterSucc.bind(this))
            .catch(this.handleUserRegisterErr.bind(this))
        // axios({
        //   method: 'post',
        //   url: '/api/reg',
        //   data: {
        //     username: this.username,
        //     password: this.password,
        //     code: this.code
        //   }
        // }).then(this.handleUserRegisterSucc.bind(this))
        // .catch(this.handleUserRegisterErr.bind(this))
      },
      handleUserRegisterSucc (res) {
        res = (res.data) ? res.data : null
        this.handleDataCorrect()
      },
      handleUserRegisterErr () {
        console.log('服务器连接失败')
      },
      handleGetPhoneCode () {
        if (this.isCodeNum) {
          this.isCodeNum = false
          if (this.$refs.username.value) {
            this.username = this.$refs.username.value
            this.$refs.codeBtn.innerHTML = '60s'
            this.$refs.codeBtn.style.backgroundColor = '#ccc'
            var timer = setInterval(() => {
              this.$refs.codeBtn.innerHTML = this.time-- + 's'
              if (this.time <= 0) {
                clearInterval(timer)
                this.isCodeNum = true
                this.$refs.codeBtn.style.backgroundColor = '#41b883'
                this.$refs.codeBtn.innerHTML = '获取验证码'
              }
            }, 1000)
            axios.get('/api/user/code?username=' + this.username)
            .then(this.handlePhoneCodeSucc.bind(this))
            // axios.get('/api/code.json')
            // .then(this.handlePhoneCodeSucc.bind(this))
          }
        }
      },
      handlePhoneCodeSucc (res) {
        res = (res.data) ? res.data : null
        this.code = res.code
      },
      handleDataCorrect () {
        this.inputCode = this.$refs.codenum.value
        if (this.inputCode !== this.code) {
          alert('验证码输入错误')
        } else if (this.inputCode === '') {
          alert('请输入验证码')
        } else if (this.inputCode === this.code && this.handleValidate(this.$refs.username.value)) {
          this.$emit('toLogin')
        }
      },
      handleBlur () {
        this.handleValidate(this.$refs.username.value)
      },
      handleValidate (phone) {
        let mobileReg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
        if (phone === '') {
          alert('请输入手机号')
        } else if (!mobileReg.test(phone)) {
          alert('请输入正确的手机号')
        } else {
          return true
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
