<template>
  <div class="index">
    <rest-header></rest-header>
    <recommend :recommends='recommends'></recommend>
    <rest-bottom></rest-bottom>
  </div>
</template>

<script>
  import axios from 'axios'
  import RestHeader from 'components/common/header.vue'
  import RestBottom from 'components/common/bottom.vue'
  import Recommend from './recommend.vue'
  export default {
    name: 'rest',
    components: {
      RestHeader,
      Recommend,
      RestBottom
    },
    data () {
      return {
        recommends: []
      }
    },
    mounted () {
      axios.get('api/rest.json')
           .then(this.handleRestAjaxSucc.bind(this))
           .catch(this.handleRestAjaxErr.bind(this))
    },
    methods: {
      handleRestAjaxSucc (res) {
        res = (res.data) ? res.data : null
        if (res) {
          this.recommends = res.data.recommends
        }
      },
      handleRestAjaxErr (err) {
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
    background: #3fe9a0;
  }
</style>