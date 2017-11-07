<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="#/hello">跳回去</a>
    <div class="md5-box test">
      <input type="file">
      <button @click="doConsole">点一下打印</button>
    </div>

  </div>
</template>

<script>
  import SparkMD5 from 'spark-md5';
  import '../common/less/sparkMd5/sparkMd5.less'
  export default {
    name: 'sparkMd5',
    data () {
      return {
        msg: '上传目的'
      }
    },
    methods: {
      doConsole: function () {
        console.log(SparkMD5)
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
