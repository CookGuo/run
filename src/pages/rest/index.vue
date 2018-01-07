<template>
  <div class="index">
    <rest-header></rest-header>
  </div>
</template>

<script>
  import RestHeader from 'components/common/header.vue'
  export default {
    name: 'rest',
    components: {
      RestHeader
    }
  }
</script>

<style scoped>
  .index{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #3fe9a0;
  }
</style>