<template>
  <div class="index-header">
  	<div class="header-cont">
  		<div class="img-box">
  			<img src="../../assets/base/img/yang.png" alt="">
  		</div>
  		<div class="weather">
  			<p class="weather-cont">晴</p>
  			<p class="wen">
  				<span class="wen-c">-2°C</span>
  				<span class="wen-desc">良</span>
  			</p>
  		</div>
	  	<div class="more-cont">
	  		<span class="more">+</span>
	  	</div>
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style scoped>
  .header-cont {
  	display: flex;
  	position: relative;
  	background: #3cd191;
  	box-sizing: border-box;
  	padding: .1rem .3rem;
  }
  .header-cont .img-box {
		height: 0;
		padding-bottom: .68rem;
		width: .68rem;
		margin-right: .1rem;
  }
  .header-cont .img-box img {
  	width: 100%;
  }
  .weather-cont {
  	font-size: .24rem;
  	color: #fff;
  	text-align: center;
  	line-height: .4rem;
  }
  .wen {
  	font-size: .24rem;
  	color: #fff;
  	text-align: center;
  	line-height: .4rem;
  }
  .more-cont {
  	position: absolute;
  	top: .2rem;
  	right: .2rem;
  }
  .more {
  	display: block;
  	border-radius: 50%;
  	height: .48rem;
  	width: .48rem;
  	background: #fff;
  	color: #3cd191;
  	text-align: center;
    line-height: .48rem;
  	font-size: .48rem;
  	font-weight: 600;
  }
</style>