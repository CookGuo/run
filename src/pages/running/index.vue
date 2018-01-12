<template>
  <div class="index">
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
</style>