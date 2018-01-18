<template>
  <div class="recommend" ref='scroller'>
    <div>
      <div class="recom-item border-bottom" v-for='item in recommends' :key='item.id'>
        <div class="recom-title">{{item.title}}</div>
        <div class="recom-img">
          <img :src="img" class="img-item" v-for='img in item.imgUrl'>
        </div>
        <div class="recom-desc">
          <div class="desc-item reference desc-active">{{item.desc.reference}}</div>
          <div class="desc-item author">{{item.desc.author}}</div>
          <div class="desc-item comments">{{item.desc.comments}}</div>
          <div class="desc-item date">{{item.desc.date}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'rest',
    props: {
      recommends: Array
    },
    watch: {
      recommends () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
    }
  }
</script>

<style scoped>
  .recommend{
    padding: .2rem .2rem 0;
    flex: 1;
    background: #fff;
    overflow: hidden;
  }
  .recom-item{
    width: 100%;
    /*height: 2.76rem;*/
    background: #fff;
  }
  .recom-title{
    padding: 0 .2rem;
    line-height: .64rem;
    font-size: .28rem;
    color: #272727;
  }
  .recom-img{
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    height: 1.64rem;
  }
  .img-item{
    height: 100%;
  }
  .recom-desc{
    display: flex;
    padding: .2rem .2rem .1rem;
  }
  .desc-item{
    margin-right: .3rem;
    color: #333333;
    font-size: .18rem;
  }
  .desc-active{
    color: #3fe9a0;
  }
</style>