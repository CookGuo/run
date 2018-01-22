<template>
  <div class="index">
    <about-header></about-header>
    <container :userinfo='userinfo'></container>
    <bottom></bottom> 
  </div>
</template>

<script>
  import axios from 'axios'
  import Bottom from 'components/common/bottom.vue'
  import Container from './container.vue'
  import AboutHeader from './header.vue'
  export default {
    name: 'running',
    components: {
      Bottom,
      Container,
      AboutHeader
    },
    data () {
      return {
        userinfo: {}
      }
    },
    created () {
      this.getUserInfoData()
    },
    methods: {
      getUserInfoData () {
        axios.get('/static/userinfo.json')
              .then(this.handleUserInfoSucc.bind(this))
              .catch(this.handleUserInfoErr.bind(this))
      },
      handleUserInfoSucc (res) {
        res = (res.data) ? res.data : null
        this.userinfo = res.data
      },
      handleUserInfoErr () {
        console.log('error')
      }
    }
  }
</script>

<style scoped>
  .index {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #3fe9a0;
  }
</style>