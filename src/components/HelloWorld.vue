<template>
  <div class="hello">
    <h1 class="text-center">{{ msg }}</h1>
    <a href='#/sparkMd5'>sparkmd5</a><br/>
    <br/>
    <a href='#/lifeCycle'>去liftCycle</a><br/>
    <br/>
    <a href='#/lazyLoad'>lazyLoad</a><br/>
    <br/>
    <a href='#/myVuex'>myVuex</a><br/>
    <br/>
    <button type="primary" @click="goTransition">内置动画</button>
    <button type="primary" @click="goReportForParent">去报告</button>
    <button type="primary" @click="goNoChildReport">去未绑定小孩报告</button>
    <div class="md5-box">
      测试一下会不会互通
    </div>
  </div>
</template>

<script>
import lifeCycle from './lifeCycle'
import { Button } from 'mint-ui'

export default {
  name: 'helloWorld',
  data () {
    return {
      msg: 'hello world',
      isShow: true
    }
  },
  methods: {
    goTransition: function () {
      this.$router.push({path: '/myTransition'})
    },
    goReportForParent: function () {
      this.$router.push({name: 'reportForParent',query: { userId:1521}})//1521//1521
    },
    goNoChildReport: function () {
      this.$router.push({name: 'noChildReport'})
    },
    show: function () {
      this.isShow = !this.isShow
    },
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
