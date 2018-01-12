<template>
  <div class="index-recreation" ref="scroller">
    <div>
      <div class="content" v-for="item in reaVideo" :key="item.id">
        <video :src="item.videoUrl" class="video" controls coop :poster="item.imgUrl"></video>
        <div class="desc">
          <p>{{item.style}}</p>
          <p>{{item.author}}</p>
          <p>评论{{item.comment}}</p>
          <p>{{item.time}}</p>
        </div>
      </div>
      <div class="list" v-for="item in reaList" :key="item.id"> 
        <p class="title">{{item.title}}</p>
        <div class="img-box">
          <div class="img-cont" v-for="items in item.imgBox" :key="items.imgUrl">
            <img :src="items.imgUrl" alt="">
          </div>
        </div>
        <div class="desc">
          <p>{{item.style}}</p>
          <p>{{item.author}}</p>
          <p>评论{{item.comment}}</p>
          <p>{{item.time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'recreation',
    props: {
      reaList: Array,
      reaVideo: Array
    },
    watch: {
      recommends () {
        this.$reaList(() => {
          this.scroll.refresh()
        })
        this.$reaVideo(() => {
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
  .index-recreation {
    margin: .2rem;
    flex: 1;
    background: #fff;
    overflow: hidden;
  }
  .content {
    padding: .2rem .3rem;
    border-bottom: 1px solid #000;
  }
  .video {
    width: 100%;
  }
  .desc {
    display: flex;
    font-size: .12rem;
    color: #000;
  }
  .desc p {
    line-height: .5rem;
    margin-left: .3rem;
  }
  .list {
    border-bottom: 1px solid #000;
  }
  .title {
    line-height: .7rem;
    font-size: .3rem;
    color: #000;
    padding: 0 .2rem;
  }
  .img-box {
    display: flex;
    margin-bottom: .1rem;
  }
  .img-cont {
    width: 33.33%;
    padding: 0 0.1rem;
  }
  .img-cont img {
    width: 100%;
  }
</style>