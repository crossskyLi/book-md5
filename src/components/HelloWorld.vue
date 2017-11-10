<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <a href='#/sparkMd5'>sparkmd5</a>
    <el-button @click="goTransition">内置动画</el-button>
    <el-button @click="goReportForParent">去报告</el-button>
    <div class="md5-box">
      测试一下会不会互通
    </div>

    <el-button @click="goBack">返回</el-button>
    <el-button @click="show">按一下</el-button>
    <transition name="el-fade-in">
      <div v-show="isShow" class="transition-box">.el-fade-in-linear</div>
    </transition>
    <transition name="el-fade-in">
      <div v-show="isShow" class="transition-box">.el-fade-in</div>
    </transition>
  </div>
</template>

<script>
  //  import SparkMD5 from 'spark-md5'
  export default {
    name: 'helloWorld',
    data () {
      return {
        msg: '计算md5',
        isShow: true
      }
    },
    methods: {
      goTransition: function () {
        this.$router.push({path:'/myTransition'})
      },
      goReportForParent:function(){
        this.$router.push({path:'/reportForParent'})
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
