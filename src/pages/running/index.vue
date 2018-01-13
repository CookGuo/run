<template>
  <div class="index">
    <run-header></run-header>
    <my-zone></my-zone>
    <bottom></bottom>
  </div>
</template>

<script>
  import Bottom from 'components/common/bottom.vue'
  import RunHeader from './header.vue'
  import MyZone from './myzone.vue'
  export default {
    name: 'running',
    components: {
      Bottom,
      RunHeader,
      MyZone
    }
  }
</script>

<style scoped>
  .index {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>