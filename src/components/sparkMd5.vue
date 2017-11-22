<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="#/">跳回去</a>
    <div class="md5-box test">
      <input type="file" multiple=true>
      <button @click="doConsole">点一下打印</button>
    </div>

    <el-button @click="goBack">返回</el-button>
    <el-button @click="show">按一下</el-button>
    <transition name="fade-in">
      <div v-show="isShow" class="transition-box">.el-fade-in-linear</div>
    </transition>
    <transition name="fade-out">
      <div v-show="isShow" class="transition-box">.el-fade-in</div>
    </transition>
  </div>
</template>

<script>
  import SparkMD5 from 'spark-md5';
  export default {
    name: 'sparkMd5',
    data () {
      return {
        msg: '上传目的',
        isShow: true
      }
    },
    methods: {
      doConsole: function () {
        console.log(SparkMD5)
      },
      show: function () {
        this.isShow = !this.isShow;
      },
      goBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
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

  .md5-box {
  }

  a {
    color: #42b983;
  }
</style>
