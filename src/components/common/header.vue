<template>
  <div class="header">
    <div class="header-top">
      <p class="top-con">今日<span class="top-num">5.0</span>公里</p>
      <div class="top-start">开始跑步</div>
    </div>
    <div class="header-nav" @click='handleIsShowVideo'>
      <div class="nav-item nav-active">推荐</div>
      <div class="nav-item">视频</div>
      <div class="nav-item">列表</div>
      <div class="nav-item">新闻</div>
      <div class="nav-item">娱乐</div>
    </div>
    <input class="header-input" placeholder="请输入搜索内容"></input>
  </div>
</template>

<script>
  export default {
    name: 'Restheader',
    methods: {
      handleIsShowVideo (e) {
        e.target.classList.add("nav-active")
        this.$emit('changeVideo', e.target.innerHTML)
      }
    }
  }
</script>

<style scoped>
  .header{
    padding: .1rem 0.2rem 0;
  }
  .header-top{
    width: 100%;
    height: 1rem;
    border-radius: .08rem;
    background: #fff;
    position: relative;
  }
  .top-con{
    font-size: .28rem;
    color: #333;
    line-height: 1rem;
    margin-left: .2rem;
  }
  .top-num{
    color: #3fe9a0;
  }
  .top-start{
    position: absolute;
    width: 1.17rem;
    right: 0.2rem;
    top:.23rem;
    line-height: .44rem;
    background: #3fe9a0;
    font-size: .2rem;
    text-align: center;
    color: #fff;
    border-radius: .2rem;
  }
  .header-nav{
    display: flex;
    padding: 0 .2rem;
    justify-content: space-between;
  }
  .nav-item{
    line-height: .88rem;
    font-size: .32rem;
  }
  .nav-active{
    color: #fff;
  }
  .header-input{
    height: .6rem;
    width: 100%;
    border-radius: .28rem;
    text-align: center;
    font-size: .28rem;
    color: #9a9a9a;
  }
</style>