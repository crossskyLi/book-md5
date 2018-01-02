// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
//状态管理
import store from './vuex/store'
//全局定义工具箱
import tool from './util/tool'
//eChart
import ECharts from 'vue-echarts/components/ECharts'
//eChart macarons 主题引入
// import 'echarts/theme/shine'


//按需引入echarts类型组件
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/radar'

//按需引入echarts功能组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/markPoint'
// import 'echarts/lib/component/grid'


Vue.config.productionTip = false;
Vue.component('mt-btn', Button);
Vue.use(tool);
Vue.component('eCharts', ECharts);
// Vue.prototype.$echarts = echarts 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
