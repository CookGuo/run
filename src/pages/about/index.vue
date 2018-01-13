<template>
  <div class="index">
    <about-header></about-header>
    <container></container>
    <bottom></bottom> 
  </div>
</template>

<script>
  import Bottom from 'components/common/bottom.vue'
  import Container from './container.vue'
  import AboutHeader from './header.vue'
  export default {
    name: 'running',
    components: {
      Bottom,
      Container,
      AboutHeader
    }
  }
</script>

<style scoped>
  .index {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #3fe9a0;
  }
</style>