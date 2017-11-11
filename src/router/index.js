import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sparkMd5 from '@/components/sparkMd5'
import myTransition from '@/components/myTransition'
import reportForParent from '@/components/reportForParent'
import lifeCycle  from '@/components/lifeCycle'
const lazyLoad = resolve =>require(['@/components/lazy-load'], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
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
      path: '/lifeCycle',
      name: 'lifeCycle',
      component: lifeCycle
    },
    {
      path: '/lazyLoad',
      name: 'lazy-load',
      component: lazyLoad
    }
  ]
})
