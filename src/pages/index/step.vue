<template>
  <div class="index-step">
    <div class="bg-img">
      <img src="../../assets/base/img/bg.jpg" alt="">
    </div>
  	<div class="step-number">
      <span class="td-number">今日步数</span>
      <span class="tdy-number">2175</span>
      <span class="goal-number">今日目标步数3000</span>
      <span class="goal">燃烧36大卡≈跑步1.4公里</span>
    </div>
    <div class="sport-list">
      <div class="sport" v-for="item in indexList">
        <div class="img-box" >
          <img :src="item.imgUrl" alt="">
        </div>
        <p class="sport-desc" :key="item.id">{{item.desc}}</p>
      </div>
    </div>
    <div class="bottom-btn">
      <span>习惯养成</span>
      <span>体重管理</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-step',
    props: {
      indexList: Array
    }
  }
</script>

<style scoped>
  .index-step {
    position: relative;
    height: 7.6rem;
  }
  .bg-img {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    left: 0;
  }
  .bg-img img {
    width: 100%;
    height: 100%;
  }
  .step-number {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 3.6rem;
    width: 3.6rem;
    top: 1rem;
    right: 27vw;
    border-radius: 50%;
    background: rgba(216, 246, 233, .5);
  }
  .td-number {
    margin-top: .56rem;
    font-size: .24rem;
    color: #333;
  }
  .tdy-number {
    font-size: .72rem;
    font-weight: 900;
    color: #333;
    margin: .36rem 0;
  }
  .goal-number {
    font-size: .24rem;
    color: #666;
  }
  .goal {
    font-size: .24rem;
    color: #f53d3d;
    margin-top: .32rem;
  }
  .sport-list {
    position: absolute;
    z-index: 1;
    bottom: 1.37rem;
    display: flex;
    right: 0;
    left: 0;
    padding: 0 1.4rem;
    justify-content: space-around;
  }
  .img-box {
    height: .94rem;
  }
  .img-box img {
    height: 100%;
  }
  .sport-desc {
    text-align: center;
    color: #666;
    font-size: .24rem;
    line-height: .6rem;
  }
  .bottom-btn {
    position: absolute;
    bottom: .5rem;
    right: 0;
    left: 0;
    display: flex;
    justify-content:center;
  }
  .bottom-btn span {
    background: #3cd191;
    border-radius: .25rem;
    line-height: .62rem;
    width: 2.3rem;
    font-size: .36rem;
    text-align: center;
    color: #fff;
    display: inline-block;
    margin: 0 .2rem;
  }
</style>