<template>
  <transition name="fade" mode="out-in">
    <div class="login-wrap">
    	<div class="logo">
    		<img src="../../../static/img/logo.jpg">
    	</div>
      <h3 class="title">账号登录</h3>
      <input class="txt" type="number" placeholder="请输入手机号" ref='loginUser' @blur='handleBlur'>
      <input class="txt" type="password" placeholder="请输入密码" ref='loginPwd'>
      <button class="btn" @click='login'>登录</button>
      <span class="log-reg" @click='handleToRegister'>没有账号？马上<a class="a-reg">注册</a></span>
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
          if (this.handleValidate(this.$refs.loginUser.value)) {
            this.username = this.$refs.loginUser.value
            this.password = this.$refs.loginPwd.value
            axios.post('/api/user/login_user', {
              username: this.username,
              password: this.password
            })
            .then(this.handleUserLoginSucc.bind(this))
            .catch(this.handleUserLoginErr.bind(this))
            // axios.get('/api/userlogin.json')
            //     .then(this.handleUserLoginSucc.bind(this))
            //     .catch(this.handleUserLoginErr.bind(this))
          }
        }
      },
      handleUserLoginSucc (res) {
        res = (res.data) ? res.data : null
        if ((res.other && this.handleValidate(this.$refs.loginUser.value)) || (res.other)) {
          document.cookie = 'userid =' + res.other
          this.$router.push('/about')
        }
      },
      handleUserLoginErr () {
        console.log('error')
      },
      handleBlur () {
        this.handleValidate(this.$refs.loginUser.value)
      },
      handleValidate (phone) {
        let mobileReg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
        if (!mobileReg.test(phone)) {
          alert('请输入正确的手机号')
          return false
        } else {
          return true
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
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .a-reg{
    text-decoration: underline;
  }
</style>
