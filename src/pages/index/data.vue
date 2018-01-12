<template>
  <div class="data">
    <div class="data-info">
      <div class="data-top">
        <div class="data-title">一周运动数据</div>
        <div class="data-details">详情>></div>
      </div>
      <div class="data-con">
        <div class="con-item" v-for='item in movement'>
          <div class="data-num">{{item.num}}K</div>
          <div class="data-process">
            <div class="data-bar" ref='bar'></div>
          </div>
          {{item.week}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index-data',
    props: {
      movement: Array
    }
  }
</script>

<style>
  .data{
    flex: 1;
    width: 100%;
    position: absolute;
    top: 9.2rem;
    bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
  }
  .data-info{
    width: 100%;
    height: 100%;
    background: #e8e7e7;
    border-radius: .1rem;
  }
  .data-top{
    line-height: .6rem;
    height: .6rem;
    padding: 0 .2rem 0 .2rem;
    font-size: .22rem;
  }
  .data-title{
    float: left;
  }
  .data-details{
    float: right;
    color: #3cd191;
  }
  .data-con{
    display: flex;
    text-align: center;
    justify-content: space-around;
    height: 84%;
  }
  .con-item{
    display: flex;
    height: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .data-process{
    width: .2rem;
    height: 96%;
    border: 1px solid #666666;
    border-radius: .1rem;
    position: relative;
    color: #333333;
  }
  .data-num{
    color: #00aeed;
  }
  .data-bar{
    width: .2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: #00aeed;
    border-radius: .1rem;
  }
</style>