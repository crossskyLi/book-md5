<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>
<style lang="less">
  @import 'common/less/base.less';
  @import 'common/less/var.less';
  @import 'assets/icon/iconfont.css';
</style>
