<template>
  <div class="index">
    <chall-header></chall-header>
    <bottom></bottom> 
  </div>
</template>

<script>
  import Bottom from 'components/common/bottom.vue'
  import ChallHeader from './header.vue'
  export default {
    name: 'challenge',
    components: {
      Bottom,
      ChallHeader
    }
  }
</script>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
    background: #3fe9a0;
  }
</style>