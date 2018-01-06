<template>
  <div class="index">
    <index-header></index-header>
    <index-step :indexList="indexList"></index-step>
    <index-canvas></index-canvas>
  	<install></install>
    <motion-data></motion-data>
    <bottom></bottom>

  </div>
</template>

<script>
  import axios from 'axios'
  import IndexCanvas from './canvas.vue'
  import IndexHeader from './header.vue'
  import IndexStep from './step.vue'
  import Install from './install'
  import MotionData from './data'
  import Bottom from 'components/common/bottom'
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
      IndexCanvas,
      Bottom,
      Install,
      MotionData
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
      },
      handleIndexAjaxErr (err) {
        console.log(err)
      }
    }
  }
</script>

<style scoped>
  .index{
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>