<template>
  <div class="bottom">
    <div class="item item-active">
      <div class="item-img">
        <img class="img" src="../ui/bottom1.png">
      </div>
      动起来
    </div>
    <div class="item">
      <div class="item-img">
        <img class="img" src="../ui/bottom2.png">
      </div>
      挑战赛
    </div>
    <div class="item">
      <div class="item-img">
        <img class="img" src="../ui/bottom3.png">
      </div>
      朋友圈
    </div>
    <div class="item">
      <router-link to="/rest">
        <div class="item-img">
          <img class="img" src="../ui/bottom4.png">
        </div>
        休息区
      </router-link>
    </div>
    <div class="item">
      <div class="item-img">
        <img class="img" src="../ui/bottom5.png">
      </div>
      关于我
    </div>
  </div>
</template>
<script>
  export default {
    name: 'bottom'
  }
</script>

<style>
  .bottom{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .98rem;
    background: #fff; 
  }
  .item{
    flex: 1;
    text-align: center;
    font-size: .24rem;
    color: #666666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item-img{
    height: 0.48rem;
    margin-bottom: .08rem;
  }
  .img{
    height: 100%
  }
  .item-active{
    color: #3cd191;
  }
</style>