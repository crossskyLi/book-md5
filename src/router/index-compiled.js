import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/pages/HelloWorld';
import sparkMd5 from '@/components/sparkMd5';
import myTransition from '@/components/myTransition';
import lifeCycle from '@/components/lifeCycle';
import myVuex from '@/components/myVuex';

var reportForParent = function reportForParent(resolve) {
  return require(['@/pages/reportForParent'], resolve);
};
var lazyLoad = function lazyLoad(resolve) {
  return require(['@/components/lazy-load'], resolve);
};
var eCharts = function eCharts(resolve) {
  return require(['@/pages/eCharts'], resolve);
};
var mintUI = function mintUI(resolve) {
  return require(['@/pages/mintUI'], resolve);
};

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: HelloWorld
  }, {
    path: '/hello',
    name: 'helloWorld',
    component: HelloWorld
  }, {
    path: '/sparkMd5',
    name: 'sparkMd5',
    component: sparkMd5
  }, {
    path: '/myTransition',
    name: 'myTransition',
    component: myTransition
  }, {
    path: '/reportForParent',
    name: 'reportForParent',
    component: reportForParent
  }, {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: lifeCycle
  }, {
    path: '/lazyLoad',
    name: 'lazy-load',
    component: lazyLoad
  }, {
    path: '/eCharts',
    name: 'eCharts',
    component: eCharts
  }, {
    path: '/myVuex',
    name: 'myVuex',
    component: myVuex
  }, {
    path: '/mintUI',
    name: 'mintUI',
    component: mintUI
  }],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    return { x: 110, y: 500 };
  }
});

//# sourceMappingURL=index-compiled.js.map