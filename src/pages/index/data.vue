<template>
  <div class="data">
    <div class="data-info">
      <div class="data-top">
        <div class="data-title">一周运动数据</div>
        <div class="data-details">详情 >></div>
      </div>
      <div class="data-con">
        <div class="con-item">
          <div class="data-num">1.9K</div>
          <div class="data-process">
            <div class="data-bar"></div>
          </div>
          一
        </div>
        <div class="con-item">
          <div class="data-num">1.9K</div>
          <div class="data-process">
            <div class="data-bar"></div>
          </div>
          二
        </div>
        <div class="con-item">
          <div class="data-num">1.9K</div>
          <div class="data-process">
            <div class="data-bar"></div>
          </div>
          三
        </div>
        <div class="con-item">
          <div class="data-num">1.9K</div>
          <div class="data-process">
            <div class="data-bar"></div>
          </div>
          四
        </div>
        <div class="con-item">
          <div class="data-num">1.9K</div>
          <div class="data-process">
            <div class="data-bar"></div>
          </div>
          五
        </div>
        <div class="con-item">
          <div class="data-num">1.9K</div>
          <div class="data-process">
            <div class="data-bar"></div>
          </div>
          六
        </div>
        <div class="con-item">
          <div class="data-num">1.9K</div>
          <div class="data-process">
            <div class="data-bar"></div>
          </div>
          日
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>

<style>
  .data{
    height: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
    position: absolute;
    bottom: .98rem;
    left:0;
    right: 0;
  }
  .data-info{
    width: 7.1rem;
    height: 2.6rem;
    background: #e8e7e7;
    border-radius: .1rem;
  }
  .data-top{
    widows: 100%;
    line-height: .4rem;
    height: .4rem;
    padding: 0 .2rem;
    font-size: .22rem;
  }
  .data-title{
    float: left;
    color: #333333;
  }
  .data-details{
    float: right;
    color: #3cd191;
  }
   .data-con{
    display: flex;
    text-align: center;
  }
  .con-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .data-process{
    width: .2rem;
    height: 1.5rem;
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
    height: .4rem;
    background: #00aeed;
    border-radius: .1rem;
  }
</style>