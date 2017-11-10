<template>
  <div>
    <el-button @click="goBack">返回</el-button>
    <el-button @click="show">按一下</el-button>
    <transition name="fade">
      <div v-show="isShow" class="transition-box">.el-fade-in-linear</div>
    </transition>
    <transition name="el-fade-in">
      <div v-show="!isShow" class="transition-box">.el-fade-in</div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'myTransition',
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      show: function () {
        this.isShow = !this.isShow
      },
      goBack: function () {
        this.$router.go(-1)
      }
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
