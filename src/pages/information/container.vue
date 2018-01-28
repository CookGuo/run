<template>
  <div class="container">
    <div>
      <div class="con-info border-bottom" :key="reaList[0].id" > 
          <h1 class="title">{{reaList[0].title}}</h1>
          <p>{{reaList[0].time}}</p>
      </div>
      <div class="con-desc">
        <div class="con-main" v-html='reaList[0].container'>
        </div>
        <div class="img-box">
          <div class="img-cont" v-for="items in reaList[0].imgBox" :key="items.imgUrl">
            <img class="img" :src="items.imgUrl" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info-contanier',
    props: {
      reaList: Array
    }
  }
</script>

<style scoped>
  .con-info{
    font-size: 12px;
    overflow: hidden;
    padding: 0 .427rem .4rem;
    border-bottom: 1px solid #eee;
    background: #fff;
  }
  .title{
    color: #000;
    font-size: 20px;
    font-weight: 700;
    padding: .4rem 0;
  }
  .con-desc{
    position: relative;
    color: #333;
    font-size: 18px;
    line-height: 30px;
    padding: .4rem .427rem;
  }
  .img-cont{
    margin-bottom: .3rem;
  }
  .img{
    width: 100%;
  }
</style>