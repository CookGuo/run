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
        reaList: []
      }
    },
    methods: {
      handleToNews (id) {
        console.log(id)
        // axios.get('/api/rest/new?id=' + id)
        //      .then(this.handleSuccessRest.bind(this))
        //      .catch(this.handleErrorRest.bind(this))
        axios.get('/static/new.json?')
             .then(this.handleSuccessNews.bind(this))
             .catch(this.handleErrorNews.bind(this))
      },
      handleSuccessNews (res) {
        console.log(res)
        let ret = (res.data) ? (res = res.data) : res
        ret && (this.reaList = ret.data.reaList)
        console.log(this.reaList[0])
      },
      handleErrorNews () {
        console.log('error')
      }
    },
    activated () {
      console.log(1)
      let id = this.$router.history.current.params.id.substring(3)
      console.log(this.$router)
      this.handleToNews(id)
    }
  }
</script>

<style scoped>
</style>