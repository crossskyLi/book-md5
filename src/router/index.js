import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'
import sparkMd5 from '@/components/sparkMd5'
import myTransition from '@/components/myTransition'
// import reportForParent from '@/pages/reportForParent'
// import noChildReport from '@/pages/noChildReport'
import lifeCycle  from '@/components/lifeCycle'
import myVuex  from '@/components/myVuex'


const reportForParent = resolve =>require(['@/pages/reportForParent'], resolve);
const noChildReport = resolve =>require(['@/pages/noChildReport'], resolve);
const reportRanking = resolve =>require(['@/components/reportRanking'], resolve);
const reportForms = resolve =>require(['@/components/reportForms'], resolve);

Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/',
    name: 'reportForParent',
    component: reportForParent
  },
  {
    path: '/hello',
    name: 'helloWorld',
    component: HelloWorld
  },
  {
    path: '/sparkMd5',
    name: 'sparkMd5',
    component: sparkMd5
  },
  {
    path: '/myTransition',
    name: 'myTransition',
    component: myTransition
  },
  {
    path: '/reportForParent',
    name: 'reportForParent',
    component: reportForParent
  },
  {
    path: '/noChildReport',
    name: 'noChildReport',
    component: noChildReport
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: lifeCycle
  },
  // {
  //   path: '/lazyLoad',
  //   name: 'lazy-load',
  //   component: lazyLoad
  // },
  {
    path: '/myVuex',
    name: 'myVuex',
    component: myVuex
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    // console.log(to);
    // console.log(from);
    // console.log(savedPosition);
    return { x: 110, y: 500 }
  }
})
