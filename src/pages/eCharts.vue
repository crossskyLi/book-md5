<template>

  <div class="eCharts">
    <chart :options="bar" ref="bar" :theme="polarTheme" auto-resize></chart>
    <p><button @click="load">Load</button></p>
  </div>

</template>

<script>


  //按需引入echarts bar组件
  import 'echarts/lib/chart/bar';

  import {initial as barInit, async as barAsync} from '../util/bar'

  export default {
    name: 'eChart',
    components: {
      //chart:ECharts
    },
    data() {
      return {
        loading: true,
        bar: barInit,
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
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../common/less/eCharts.less";
</style>

