<template>
  <div class="index">
    <info-header></info-header>
    <container :reaList='reaList'></container>
  </div>
</template>

<script>
  import axios from 'axios'
  import InfoHeader from './header'
  import Container from './container'
  export default {
    name: 'info-index',
    components: {
      InfoHeader,
      Container
    },
    data () {
      return {
        reaList: {}
      }
    },
    methods: {
      handleToNews (id) {
        axios.get('/api/rest/new?id=' + id)
             .then(this.handleSuccessRest.bind(this))
             .catch(this.handleErrorRest.bind(this))
        // axios.get('/static/new.json?id=' + id)
        //      .then(this.handleSuccessNews.bind(this))
        //      .catch(this.handleErrorNews.bind(this))
      },
      handleSuccessNews (res) {
        console.log(res)
        console.log(123)
        res = (res.data) ? res.data : null
        if (res && res.data) {
          this.reaList = res.data.reaList
        }
      },
      handleErrorNews () {
        console.log('error')
      }
    },
    created () {
      let id = this.$router.history.current.params.id.substring(3)
      this.handleToNews(id)
    }
  }
</script>

<style scoped>
</style>