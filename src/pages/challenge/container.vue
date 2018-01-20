<template>
  <div class="container"ref='scroller'>
    <div class="con-list">
      <div class="con-item">
        <img src="../../../static/img/game1.jpg" class="item-img">
      </div>
      <div class="con-item">
        <img src="../../../static/img/game2.jpg" class="item-img">
      </div>
      <div class="con-item">
        <img src="../../../static/img/game3.jpg" class="item-img">
      </div>
      <div class="con-item">
        <img src="../../../static/img/game3.jpg" class="item-img">
      </div>
      <div class="con-item">
        <img src="../../../static/img/game3.jpg" class="item-img">
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'container',
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
    }
  }
</script>

<style scoped>
  .container{
    flex: 1;
    background: #f5f5f5;
    overflow: hidden;
  }
  .con-list{
    overflow: hidden;
  }
  .con-item{
    margin: .2rem .2rem 0;
    height: 2.07rem;
  }
  .item-img{
    width: 100%;
    height: 100%;
  }
</style>