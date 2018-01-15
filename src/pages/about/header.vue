<template>
  <div class="about-header">
    <div class="header-cont">
    <iframe class="tianqi" width="200" scrolling="no" height="46" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=12&bgc=%23&icon=1&num=1&site=12"></iframe>
  		关于我
      <div class="login" @click='handleToLogin'>登录</div>
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'about-index',
    methods: {
      handleToLogin () {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .chall-header{
    height: .88rem;
    position: relative;
  }
  .header-cont {
    line-height: .88rem;
    text-align: center;
    color: #fff;
    font-size: .34rem;
    background: #42c69a;
    position: relative;
  }
  .login{
    width: 1.1rem;
    line-height: .88rem;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: .30rem;
    color: #fff;
  }
  .tianqi{
    width: 4rem;
    height: .88rem;
    position: absolute;
    left: -1.5rem;
    top: 0;
  }
</style>