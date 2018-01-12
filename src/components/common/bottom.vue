<template>
  <div class="bottom">
    <div class="item" v-for="(item, index) in list" :class="{'item-active': item.show}" @click='handleRouter(index)'>
      <div class="item-img">
        <img class="img" :src="item.img">
      </div>
      {{item.tab}}
    </div>
  </div>
</template>
<script>
  let obj = [
          {'tab': '动起来', 'show': true, 'img': '../../../static/img/bottom1.jpg'},
          {'tab': '挑战赛', 'show': false, 'img': '../../../static/img/bottom2.png'},
          {'tab': '奔跑圈', 'show': false, 'img': '../../../static/img/bottom3.png'},
          {'tab': '休息区', 'show': false, 'img': '../../../static/img/bottom4.png'},
          {'tab': '关于我', 'show': false, 'img': '../../../static/img/bottom5.png'}
  ]
  export default {
    name: 'bottom',
    data () {
      return {
        list: obj
      }
    },
    methods: {
      handleRouter: function (index) {
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].show = false
          this.list[i].img = '../../../static/img/bottom' + (i + 1) + '.png'
          if (i === index) {
            this.list[index].show = true
            this.list[index].img = '../../../static/img/bottom' + (i + 1) + '.jpg'
          }
        }
        index === 0 && this.$router.push({ path: '/' })
        index === 1 && this.$router.push({ path: '/challenge' })
        index === 2 && this.$router.push({ path: '/running' })
        index === 3 && this.$router.push({ path: '/rest' })
        index === 4 && this.$router.push({ path: '/about' })
      }
    }
  }
</script>

<style>
  .bottom{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .98rem;
    background: #fff; 
  }
  .item{
    flex: 1;
    text-align: center;
    font-size: .24rem;
    color: #666666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item-img{
    height: 0.48rem;
    margin-bottom: .08rem;
  }
  .img{
    height: 100%
  }
  .item-active{
    color: #3cd191;
  }
</style>