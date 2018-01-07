<template>
  <div class="index">
    <rest-header></rest-header>
    <rest-video :videoList="videoList" v-show="false"></rest-video>
    <rest-recreation :reaVideo="reaVideo" :reaList="reaList"></rest-recreation>
  </div>
</template>

<script>
  import RestHeader from 'components/common/header.vue'
  import RestRecreation from './recreation.vue'
  import RestVideo from './video.vue'
  import axios from 'axios'
  export default {
    name: 'rest',
    data () {
      return {
        videoList: [],
        reaVideo: [],
        reaList: []
      }
    },
    components: {
      RestHeader,
      RestVideo,
      RestRecreation
    },
    mounted () {
      axios.get('/api/rest.json')
           .then(this.handleSuccessRest.bind(this))
           .catch(this.handleErrorRest.bind(this))
    },
    methods: {
      handleSuccessRest (res) {
        console.log(res)
        let ret = (res.data) ? (res = res.data) : res
        ret && (this.videoList = ret.data.video)
        ret && (this.reaVideo = ret.data.reaVideo)
        ret && (this.reaList = ret.data.reaList)
      },
      handleErrorRest (err) {
        console.log(err)
      }
    }
  }
</script>

<style scoped>
  .index {
    width: 100%;
    height: 100%;
    background: #3fe9a0;
  }
</style>