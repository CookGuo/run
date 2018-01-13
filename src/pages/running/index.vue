<template>
  <div class="index">
    <run-header></run-header>
    <activity></activity>
    <hot :hotList='hotList'></hot>
    <my-zone></my-zone>
    <bottom></bottom> 
  </div>
</template>

<script>
  import axios from 'axios'
  import Bottom from 'components/common/bottom.vue'
  import RunHeader from './header.vue'
  import MyZone from './myzone.vue'
  import Activity from './activities.vue'
  import Hot from './hot.vue'
  export default {
    name: 'running',
    data () {
      return {
        hotList: []
      }
    },
    components: {
      Bottom,
      RunHeader,
      MyZone,
      Activity,
      Hot
    },
    mounted () {
      axios.get('api/running.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
    },
    methods: {
      handleGetDataSucc (res) {
        res = (res.data) ? res.data : null
        if (res && res.data) {
          this.hotList = res.data.hot
        }
      },
      handleGetDataErr () {
        console.log('error')
      }
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
    background: #f5f5f5;
  }
</style>