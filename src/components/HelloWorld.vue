<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <a href="#/sparkMd5">跳一下</a>
    <div class="md5-box">
      测试一下会不会互通
    </div>
    <!--<ul>-->
    <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
    <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
    <!--<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>-->
    <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
    <!--<br>-->
    <!--<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>-->
    <!--</ul>-->
    <!--<h2>Ecosystem</h2>-->
    <!--<ul>-->
    <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
    <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
    <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
    <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  import SparkMD5 from 'spark-md5'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '计算md5'
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
