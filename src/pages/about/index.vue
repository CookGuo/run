<template>
  <div class="index">
    <div class="box">
      <iframe class="tianqi" width="200" scrolling="no" height="46" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=12&bgc=%23&icon=1&num=1&site=12"></iframe>
    </div>
    <bottom></bottom> 
  </div>
</template>

<script>
  import Bottom from 'components/common/bottom.vue'
  export default {
    name: 'running',
    components: {
      Bottom
    }
  }
</script>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
    background: #3fe9a0;
  }
  .box{
    width: 1rem;
    height: .88rem;
    position: relative;
  }
  .tianqi{
    width: 4rem;
    height: .88rem;
    position: absolute;
    left: -1.5rem;
    top: 0;
  }
</style>