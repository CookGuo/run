<template>
  <div class="index">
    <run-header></run-header>
    <activity @change='handleChangeTab'></activity>
    <my-zone :circleInfo='circleInfo' v-show='flagCir'></my-zone>
    <hot :hotList='hotList' v-show='flagHot'></hot>
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
        hotList: [],
        circleInfo: [],
        flagHot: true,
        flagCir: false
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
          this.circleInfo = res.data.circle
        }
      },
      handleGetDataErr () {
        console.log('error')
      },
      handleChangeTab (index) {
        switch (index) {
          case 0 :
            this.flagHot = true
            this.flagCir = false
            break
          case 1 :
            this.flagCir = true
            this.flagHot = false
            break
        }
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