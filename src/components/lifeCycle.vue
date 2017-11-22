<template>
  <div class="hello">
    <a href="#/">返回</a>
    <h1>{{ message }}</h1>
    <button>看一下计算属性</button>
  </div>
</template>

<script>
  //  import SparkMD5 from 'spark-md5';
  export default {
    name: 'lifeCycle',
    data () {
      return {
        message: '消息'
      }
    },
    beforeCreate: function () {
      console.group('beforeCreate 创建前状态===============》');
      console.log("%c%s", "color:red", "el     : ", this.$el); //undefined
      console.log("%c%s", "color:red", "data   : ", this.$data); //undefined
      console.log('创建之前计算属性',this.showMessage)
      console.log("%c%s", "color:red", "message: ", this.message)
    },
    created: function () {
      console.group('created 创建完毕状态===============》');
      console.log("%c%s", "color:red", "el     : ", this.$el); //undefined
      console.log("%c%s", "color:red", "data   : ", this.$data); //已被初始化
      console.log("%c%s", "color:red", "message: ", this.message); //已被初始化
      console.log('创建之后计算属性',this.showMessage);
      this.showMessage = 'computed';
      console.log("%c%s", "color:red", "message: ", this.message); //已被初始化
    },
    beforeMount: function () {
      console.group('beforeMount 挂载前状态===============》');
      console.log("%c%s", "color:red", "el     : ", (this.$el)); //已被初始化
//      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data); //已被初始化
      console.log("%c%s", "color:red", "message: ", this.message); //已被初始化
    },
    computed:{
      showMessage : {
        get: function () {
          return this.message
        },
        set: function (v) {
          this.message = this.message+ v;
        }
      }
    },
    mounted: function () {
//      console.log(this.$httpGet())
      console.group('mounted 挂载结束状态===============》');
      console.log("%c%s", "color:red", "el     : ", this.$el); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data); //已被初始化
      console.log("%c%s", "color:red", "message: ", this.message); //已被初始化
    },
    beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "message: ", this.message);
    },
    updated: function () {
      console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "message: ", this.message);
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "message: ", this.message);
    },
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red", "el     : ", this.$el);
      console.log("%c%s", "color:red", "data   : ", this.$data);
      console.log("%c%s", "color:red", "message: ", this.message)
    },
    methods: {}
  }
</script>

