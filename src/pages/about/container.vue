<template>
  <div class="container border-top">
    <div class="about">
    	<div>用户名:<span>XXX</span></div>
    	<div>账&nbsp;&nbsp;&nbsp;&nbsp;号:<span>101129101</span></div>
    </div>
    <div class="con-list">
    	<div class="con-item">我的成就</div>
    	<div class="con-item">关注</div>
    	<div class="con-item">通知</div>
    	<div class="con-item">主页</div>
    </div>
    <div class="cancellation border-topbottom">注销登录</div>
  </div>
</template>

<script>
  export default {
    name: 'container'
  }
</script>

<style scoped>
  .container {
    flex: 1;
    background: #fff;
  }
  .about{
  	height: .8rem;
  	background: #42c69a;
  	padding: .4rem;
  	display: flex;
  	justify-content: space-between;
  	flex-direction: column;
  	font-size: .28rem;
  	color: #fff;
  }
  .con-list{
  	display: flex;
  	justify-content: space-around;
  	line-height: 1rem;
  }
  .cancellation{
  	height: .8rem;
  	color: red;
  	line-height: .8rem;
  	text-align: center;
  	font-size: .36rem;
  }
</style>