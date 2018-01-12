<template>
  <div class="header">
    <div class="header-top">
      <img src="../../../static/img/music.jpg" class="top-img">
    </div>
    <div class="header-info">
      <img src="../../../static/img/mycircle.jpg" class="info-img">
      <!-- <div class="top-info">
        <h3 class="header-title">
          <i class="iconfont">&#xe64d;</i>
          休息乐园
        </h3>
        <span class="top-name">MY CIRCLE</span>
        <p class="top-desc">运动之后享受美妙的惬意时光</p>
      </div> -->
    </div>
    <div class="header-input">
      <input class="input" placeholder="请输入搜索内容"></input>
    </div>
    <div class="header-nav" @click='handleIsShowVideo'>
      <div class="nav-item" :class="{'nav-active': isActive}">推荐</div>
      <div class="nav-item">视频</div>
      <div class="nav-item">列表</div>
      <div class="nav-item">新闻</div>
      <div class="nav-item">娱乐</div>
    </div>
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
    },
    data () {
      return {
        isActive: true
      }
    }
  }
</script>

<style scoped>
  .header{
    position: relative;
  }
  .header-top{
    width: 100%;
    height: 2.6rem;
  }
  .top-img{
    width: 100%;
  }
  .header-input{
    padding: 0 0.2rem;
  }
  .input{
    height: .6rem;
    width: 100%;
    border-radius: .28rem;
    text-align: center;
    font-size: .28rem;
    color: #9a9a9a;
  }
  .header-nav{
    display: flex;
    padding: 0 .44rem;
    justify-content: space-between;
  }
  .nav-item{
    line-height: .48rem;
    font-size: .28rem;
  }
  .nav-active{
    color: #42c69a;
    border-bottom: .02rem solid #42c69a;
  }
  .header-info{
    /*margin: .1rem .2rem;
    background: #fff;
    text-align: center;
    color: #666666;*/
    height: 1.14rem;
    margin-bottom: .1rem;
  }
  .info-img{
    height: 100%;
  }
  /*.top-info{
    padding: .15rem 0;
    border-radius: .08rem;
  }
  .header-title{
    font-size: .22rem;
    color: #42c69a;
    padding: 0 0 .08rem;
  }
  .top-desc{
    font-size: .18rem;
  }
  .top-name{
    display: block;
    margin-bottom: .1rem;
    font-size: .14rem;
  }*/
</style>