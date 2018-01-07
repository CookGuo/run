<template>
  <div class="index-rest">
    <div class="content" v-for="item in videoList" :key="item.id">
      <video :src="item.videoUrl" class="video" controls coop :poster="item.imgUrl"></video>
      <div class="desc">
        <p>{{item.style}}</p>
        <p>{{item.author}}</p>
        <p>评论{{item.comment}}</p>
        <p>{{item.time}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-video',
    props: {
      videoList: Array
    }
  }
</script>

<style scoped>
  .index-rest {
    margin: .2rem;
    background: #fff;
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
    line-height: .4rem;
    margin-left: .3rem;
  }
</style>