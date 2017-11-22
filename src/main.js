// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
//状态管理
import store from './vuex/store'
//全局定义工具箱
import tool from './util/tool'
//eChart
import ECharts from 'vue-echarts/components/ECharts.vue'
//eChart macarons 主题引入
import 'echarts/theme/macarons'

Vue.config.productionTip = false;
// Vue.use(ElementUI);
//按钮组件
Vue.component('mt-btn', Button);
//图表组件
Vue.component('chart', ECharts);
Vue.use(tool);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
