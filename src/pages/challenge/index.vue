<template>
  <div class="index">
    <chall-header></chall-header>
    <chall-banner></chall-banner>
    <chall-game></chall-game>
    <chall-container></chall-container>
    <bottom></bottom> 
  </div>
</template>

<script>
  import Bottom from 'components/common/bottom.vue'
  import ChallHeader from './header.vue'
  import ChallGame from './game.vue'
  import ChallContainer from './container.vue'
  import ChallBanner from './banner.vue'
  export default {
    name: 'challenge',
    components: {
      Bottom,
      ChallHeader,
      ChallBanner,
      ChallContainer,
      ChallGame
    }
  }
</script>

<style scoped>
  .index {
    display: flex;
    position: absolute;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
</style>