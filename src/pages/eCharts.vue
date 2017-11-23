<template>

  <div class="eCharts">
    <chart :options="bar" ref="bar" :theme="polarTheme" auto-resize></chart>
    <p><button @click="load">Load bar</button></p>

    <chart :options="scoreRadar" auto-resize></chart>
    <!--<button @click = 'loadRadar'>load radar</button>-->
  </div>

</template>

<script>
  import {initial as barInit, async as barAsync} from '../util/bar'
  import {scoreRadar as radar} from '../util/radar'
  export default {
    name: 'eChart',
    components: {
      //chart:ECharts
    },
    data() {
      return {
        loading: true,
        bar: barInit,
        scoreRadar:radar,
        polarTheme:'macarons'
      }
    },
//    mounted:function(){
//      console.log(barInit.showLoading)
//    },
    mounted: function () {
    // simulating async data from server
      this.seconds = 2;
      let bar = this.$refs.bar;
      bar.showLoading({
        text: '正在加载',
        color: '#4ea397',
        maskColor: 'rgba(255, 255, 255, 0.4)'
      });
      let timer = setInterval(() => {
        this.seconds--;
        if (this.seconds === 0) {
          clearTimeout(timer)
          bar.hideLoading()
          bar.mergeOptions(barAsync)
        }
      }, 1000)
    },
    methods: {
      load () {
        // simulating async data from server
        this.seconds = 2;
        let bar = this.$refs.bar;
        bar.showLoading({
          text: '正在加载',
          color: '#4ea397',
          maskColor: 'rgba(255, 255, 255, 0.4)'
        });
        let timer = setInterval(() => {
          this.seconds--;
          if (this.seconds === 0) {
            clearTimeout(timer)
            bar.hideLoading()
            bar.mergeOptions(barAsync)
          }
        }, 1000)
      },
    }
  }
</script>
<style lang="less" scoped>
  @import "../common/less/eCharts.less";
</style>

