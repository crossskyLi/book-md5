import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sparkMd5 from '@/components/sparkMd5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'hello world',
      component: HelloWorld
    },
    {
      path: '/sparkMd5',
      name: '计算md5',
      component: sparkMd5
    }
  ]
})
