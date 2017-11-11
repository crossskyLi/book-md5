<template>
  <div>
   懒加载组件
  </div>
</template>
<script>

  export default {
    name: 'lazy-load',
    data () {
      return {
        isShow: true
      }
    },
    created:function(){
      console.log('懒加载')
    },
    methods: {

    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
