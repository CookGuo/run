<template>
  <div class="container border-top">
    <div class="con-list">
    	<div class="con-item">
        <div class="con-left">
          <i class="iconfont icon">&#xe64e;</i>
          <span>运动商城</span>
        </div>
        <i class="iconfont con-right">&#xe612;</i>
      </div>
      <div class="con-item">
        <div class="con-left">
          <i class="iconfont icon">&#xe659;</i>
          <span>我的跑友</span>
        </div>
        <i class="iconfont con-right">&#xe612;</i>
      </div>
      <div class="con-item">
        <div class="con-left">
            <i class="iconfont icon">&#xe670;</i>
            <span>运动钱包</span>
        </div>
        <i class="iconfont con-right">&#xe612;</i>
      </div>
      <div class="con-item">
        <div class="con-left">
          <i class="iconfont icon">&#xe673;</i>
          <span>我的俱乐部</span>
        </div>
        <i class="iconfont con-right">&#xe612;</i>
      </div>
      <div class="con-item">
        <div class="con-left">
          <i class="iconfont icon">&#xe63f;</i>
          <span>我的收藏</span>
        </div>
        <i class="iconfont con-right">&#xe612;</i>
      </div>
    </div>
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
    overflow: hidden;
  }
  .con-list{
  	display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .con-item{
    font-size: .3rem;
  	line-height: 1.24rem;
    color: #333;
    border-bottom: .02rem solid #bab6b6;
    padding: 0 .42rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .icon{
    font-size: .52rem;
    color: #4cc99f;
    margin-right: .22rem;
  }
  .con-left{
    display: flex;
    align-items: center;
  }
  .con-right{
    font-size: .42rem;
  }
</style>