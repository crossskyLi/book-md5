<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
//  //DOM树加载
//  (function (doc, win) {
//    var docEl = doc.documentElement,
//      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//      recalc = function () {
//        var clientWidth = docEl.clientWidth;
//        if (!clientWidth) return;
//        if(clientWidth>=640){
//          docEl.style.fontSize = '100px';
//        }else{
//          docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
//        }
//      };
//
//
//    if (!doc.addEventListener) return;
//    win.addEventListener(resizeEvt, recalc, false);
//    doc.addEventListener('DOMContentLoaded', recalc, false);
//  })(document, window);
  export default {
    name: 'app'
  }

</script>
<style lang="less">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }


</style>
