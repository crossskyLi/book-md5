import _default2 from 'mint-ui/lib/button/style.css';
import _default from 'mint-ui/lib/button';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';
import router from './router';
//状态管理
import store from './vuex/store';
//全局定义工具箱
import tool from './util/tool';
//eChart
import ECharts from 'vue-echarts/components/ECharts.vue';
//eChart macarons 主题引入
import 'echarts/theme/macarons';
//按需引入echarts bar组件
import 'echarts/lib/chart/bar';

Vue.config.productionTip = false;
// Vue.use(ElementUI);
//mintUI按钮组件
Vue.component('mt-btn', _default);
//eChart图表组件
Vue.component('chart', ECharts);
Vue.use(tool);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App: App }
});

//# sourceMappingURL=main-compiled.js.map