<template>
  <div class="index">
    <index-header></index-header>
    <index-step :indexList="indexList"></index-step>
    <index-canvas></index-canvas>
  </div>
</template>

<script>
  import axios from 'axios'
  import IndexCanvas from './canvas.vue'
  import IndexHeader from './header.vue'
  import IndexStep from './step.vue'
  export default {
    name: 'index',
    data () {
      return {
        indexList: []
      }
    },
    components: {
      IndexHeader,
      IndexStep,
      IndexCanvas
    },
    mounted () {
      axios.get('api/index.json')
           .then(this.handleIndexAjaxSucc.bind(this))
           .catch(this.handleIndexAjaxErr.bind(this))
    },
    methods: {
      handleIndexAjaxSucc (res) {
        res = (res.data) ? res.data : null
        if (res) {
          this.indexList = res.data
        }
        console.log(this.indexList[0].imgUrl)
      },
      handleIndexAjaxErr (err) {
        console.log(err)
      }
    }
  }
</script>

<style scoped>
  .index {
    position: relative;
  }
</style>