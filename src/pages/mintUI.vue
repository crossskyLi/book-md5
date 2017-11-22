<template>
  <div>
    <mt-btn type="primary" @click="goBack()">返回</mt-btn>
    <!--<mt-button>mint按钮</mt-button>-->
  </div>
</template>

<script>
  export default {
    name: 'mintUI',
    components: {

    },
    data() {
      return {

      }
    },
    methods: {
      goBack(){
        this.$router.push({name:"helloWorld"})
      }
    }
  }
</script>
<style lang="less" scoped>

</style>

