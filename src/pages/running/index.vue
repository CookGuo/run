<template>
  <div class="index">
    <run-header></run-header>
    <bottom></bottom> 
  </div>
</template>

<script>
  import Bottom from 'components/common/bottom.vue'
  import RunHeader from './header.vue'
  export default {
    name: 'running',
    components: {
      Bottom,
      RunHeader
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