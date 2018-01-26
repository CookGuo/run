<template>
  <div class="issue">
    <div class="header">发布动态</div>
    <div class="content">
      <div class="input" >
        <div contenteditable="true" class="input-info" ref="summary">这一刻你想说的话。。。</div>
        <div class="input-cont">
          <div class="img-box">
            <img src="../../../static/img/isue.png" alt="">
          </div>
          <div class="change">
            <input type="file" class="change-file border" ref="img">
          </div>
        </div>
      </div>
      <div class="link">
        <img src="../../../static/img/link2.png" alt="">
        <input placeholder="请输入标题...." ref="title">
      </div>
      <div class="link">
        <img src="../../../static/img/dd.png" alt="">
        <input type="text" placeholder="请输入您的地址" ref="localtion"> 
      </div>
      <div class="link">
        <img src="../../../static/img/ding.png" alt="">
        <select name="" id="" ref="select">
          <option value="公开">公开</option>
          <option value="仅自己">仅自己</option>
          <option value="仅好友">仅好友</option>
        </select>
      </div>
      <div class="btn" @click="handleInputClick">
        即刻发布
      </div>
    </div>
    <bottom class="bottom"></bottom>
  </div>
</template>

<script>
  import Bottom from 'components/common/bottom'
  import axios from 'axios'
  export default {
    name: 'issue',
    data () {
      return {
        title: '',
        summary: '',
        city: '',
        isBtn: false
      }
    },
    components: {
      Bottom
    },
    methods: {
      handleInputClick () {
        if (this.isBtn) {
          this.title = this.$refs.title.value
          this.summary = this.$refs.summary.innerHTML
          this.city = this.$refs.select.value
          if (this.title && this.summary && this.city) {
            let file = this.$refs.img.files[0]
            let param = new FormData()
            param.append('file', file, file.name)
            param.append('title', this.title)
            param.append('summary', this.summary)
            param.append('city', this.city)
            let config = {
              headers: { 'Content-Type': 'multipart/form-data' }
            }
            axios.post('/api/circle/add', param, config)
            .then((res) => {
              console.log(res)
            })
          }
        } else {
          console.log(11)
        }
      }
    },
    mounted () {
      if (!document.cookie) {
        alert('请先登录')
      } else {
        this.isBtn = true
      }
    }
  }
</script>


<style scoped>
  .issue {
    background: #e0e0e0;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .header {
    text-align: center;
    background: #42c69a;
    line-height: .88rem;
    font-size: .32rem;
    color: #fff;
  }
  .content {
    padding: .88rem .4rem 0;
  }
  .input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 4.3rem;
    width: 100%;
    border-radius: 5px;
    background: #fff;
    box-sizing: border-box;
    padding: .4rem;
    font-size: .28rem;
    color: #333;
  }
  .input-cont {
    height: 1.4rem;
  }
  .input-cont .img-box {
    float: left;
    width: 1.4rem;
    height: 0;
    padding-bottom: 1.4rem;
    margin-right: .2rem;
  }
  .img-box img {
    width: 100%;
  }
  .change-file {
    opacity: 0;
    height: 100%;
    width: 100%;
  }
  .change {
    height: 1.4rem;
    width: 1.4rem;
    background: url(../../../static/img/jia.png) no-repeat center;
    background-size: 100%, 100%;
    float: left;
  }
  .link {
    width: 100%;
    height: .8rem;
    background: #fff;
    display: flex;
    margin-top: .2rem;
    align-items: center;
    border-radius: 5px;
    padding: 0 .3rem;
    box-sizing: border-box;
  }
  .link img {
    width: .46rem;
    height: .46rem;
    margin-right: .2rem;
  }
  .link span {
    line-height: .46rem;
    font-size: .24rem;
    color: #333;
  }
  .btn {
    height: .8rem;
    width: 3rem;
    border-radius: 5px;
    background: #42c69a;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    margin: .5rem auto;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .input-info {
    height: 2rem;
    overflow: hidden;
  }
</style>

