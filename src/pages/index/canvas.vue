<template>
  <div class="index-canvas">
    <div class="bet" ref="bet"></div>
  </div>
</template>

<script>
  export default {
    name: 'index-step',
    data () {
      return {
        number: 44
      }
    },
    mounted () {
      console.log(this.list)
    },
    computed: {
      list () {
        const arr = []
        for (let i = 0; i < this.number; i++) {
          arr.push(this.$refs.bet)
        }
        return arr
      }
    }
  }
</script>

  <style scoped>
  .bet {
    position: absolute;
    background: blue;
    left: 0;
    top: -.24rem;
    height: .12rem;
    width: .45rem;
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    border-radius: .1rem;
  }
</style>