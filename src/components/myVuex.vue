                                    
<template>
  <div>
    <el-button @click="increment" type="primary">按一下状态机加一</el-button>
    <el-button @click="decrement" type="primary">按一下状态机减一</el-button>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'myVuex',
    data () {
      return {
        isShow: true
      }
    },
    computed: {},
    methods: {
      increment: function () {
        console.log('组件本身的', this.count);
        this.$store.commit('increment');

        console.log('加', this.$store.state.count);
      }
      ,
      decrement: function () {
        this.$store.commit('decrement');
        console.log('减', this.count);
      }
    }
  }
</script>

                                                                                                                                                                                                          
