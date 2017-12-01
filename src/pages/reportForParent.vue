<template>

  <div>
    <div class="tabs">
      <div class="tab" @click="toggleTab('reportRanking')">
        <p :class="tabsActive?'tabActive':''">排名</p>
      </div>
      <div class="tab" @click="toggleTab('reportForms')">
        <p :class="!tabsActive?'tabActive':''">报表</p>
      </div>
    </div>
    <div :is="currentTab" class="scroll" keep-alive></div>
  </div>

</template>

<script>

import reportRanking from '../components/reportRanking'
import reportForms from '../components/reportForms'

export default{
  name: 'reportForParent',
  components: {
    reportRanking,
    reportForms,
  },
  data() {
    return {
      currentTab: 'reportRanking', //默认标签页
      tabsActive:true,
    };
  },
  methods: {
    toggleTab: function(tab) { 
      this.currentTab = tab; // tab 为当前触发标签页的组件名
      if(tab == 'reportRanking'){
        this.tabsActive = true
      }else{
        this.tabsActive = false
      }
    },
  }
}

</script>
<style lang="less" scoped>

.scroll{
  padding:42px 0 0 0;
  height:100%;
  overflow: scroll;
}
.tabs{
  width:100%;
  display: flex;
  justify-content: space-around;
  position:fixed;
  top:0;
  width:100%;
  background-color: #fff;
  z-index: 100;//改动源码echarts中提示工具的层级,使导航条能够覆盖住提示工具(node_modules/echarts/lib/component/tooltip/ToolTipContent中由"z-index:999999999"=>"z-index:99")
  .tab{
    width: 50%;
  }
  .tabActive{
    background-color: #F7D319;
  }
  p{
    width:100%;
    margin:auto;
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    color:#333;
    padding-top: 10px;
    padding-bottom:10px;
  }
}
</style>

