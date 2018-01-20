<template>
  <div class="slider">
    <swiper ref="mySwiper" class="banner">
      <swiper-slide class="banner-item">
        <img class="item-img" src="../../../static/img/banner1.jpg">
      </swiper-slide>
      <swiper-slide class="banner-item">
        <img class="item-img" src="../../../static/img/banner1.jpg">
      </swiper-slide>
      <swiper-slide class="banner-item">
        <img class="item-img" src="../../../static/img/banner1.jpg">
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"  slot="pagination"></div>
  </div>
</template>

<script>
  export default {
    name: 'chall-banner',
    data () {
      return {
        swiperOption: {
          autoplay: 1000,
          direction: 'horizontal',
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    }
  }
</script>

<style scoped>
  .slider{
    height: 2.73rem;
  }
  .banner{
    height: 100%;
  }
  .item-img{
    width: 100%;
    height: 100%;
  }
</style>