<template>
  <div class="chall-header">
  	<div class="header-cont">
  		挑战赛
      <div class="myscore">我的成绩</div>
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped>
  .chall-header{
    height: .88rem;
  }
  .header-cont {
    line-height: .88rem;
    text-align: center;
    color: #fff;
    font-size: .34rem;
    background: #42c69a;
  }
  .myscore{
    width: 1.1rem;
    line-height: .3rem;
    position: absolute;
    right: .2rem;
    bottom: .3rem;
    background: #fff;
    font-size: .22rem;
    color: #3cd191;
    border-radius: .14rem;
  }
</style>