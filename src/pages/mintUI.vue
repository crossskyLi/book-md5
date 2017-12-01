<template>
  <div>
    <mt-btn type="primary" @click="goBack">返回</mt-btn>
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
      },
      show(){
        console.log('123')
      }
    }
  }
</script>
<style lang="less" scoped>

</style>

