<template>

  <div class="reportForParent" id="rankingContent">
    <div class="banner">
      <div class="bannerText" v-show="bannerShow">
        <div class="bannerMid">
          <p>专家表明：3-6年级学生每天阅读时间至少15分钟</p>
          <i class="iconfont icon-cuowuguanbiquxiao" @click="bannerClose"></i>
        </div>
      </div>
      <h3 v-if="retUserNull">您的孩子击败了0%的同学</h3>
      <h3 v-else>您的孩子击败了{{retUser.ranking}}%的同学</h3>
      <div class="bottom">
        <span class="halfPX"></span>
        <p>每周日24时结算</p>
        <span class="halfPX"></span>
      </div>
      <div :class="headerFixed == false ? 'weekBox' : 'weekBox weekBoxFixed'">
        <i class="iconfont icon-shangyiyehoutuifanhui"  @click="prevWeek"></i>
        <p class="week">
          {{startTimeStr}}-{{endTimeStr}}阅读报告
        </p>
        <i class=""  @click="prevWeek"></i>
        <i :class="canClick == true ? 'iconfont icon-xiayiyeqianjinchakangengduo' : 'iconfont icon-xiayiyeqianjinchakangengduo icongray'"  @click="canClick && nextWeek()"></i>
      </div>
    </div>
    <div class="content">
      <!-- 表格头部固定 -->
      <!-- 两个一样的表格来实现头部和内容的样式区分 -->
      <div id="headerFixed" :class="headerFixed == false ? 'table' : 'table tableHeader'">
        <div class="tableRowth">
          <div class="tableCell">
            <p>排名</p>
          </div>
          <div class="tableCell">
            <p>姓名</p>
          </div>
          <div class="tableCell">
            <p>阅读时间</p>
          </div>
          <div class="tableCell">
            <p>阅读完成率</p>
          </div>
          <div class="tableCell">
          </div>
        </div>
        <div class="tableRow">
          <div :class="retUser.index < 4 ? 'tableCell tableCellColor' : 'tableCell'">
            <p >{{retUser.index}}</p>
          </div>
          <div class="tableCell">
            <p>{{retUser.realName}}</p>
          </div>
          <div class="tableCell">
            <p>{{retUser.timeStr}}</p>
          </div>
          <div class="tableCell" >
            <p>{{retUser.completionRate}}</p>
          </div>
          <div :class="retUser.time < 6300000 ? 'tableCell' : 'tableCell tableCellColor'">
            <div v-if="retUser.time < 6300000">
              <p>差{{retUser.shortTime}}分</p>
              <p>加油！</p>
            </div>
            <div v-else>
              <p>真棒！</p>
            </div>
          </div>
        </div>
        <div v-show="!headerFixed" v-for="student in studentList" class="tableRow">
          <div :class="student.index < 4 ? 'tableCell tableCellColor' : 'tableCell'">
            <p>{{student.index}}</p>
          </div>
          <div class="tableCell tableCellHalfPX">
            <p>{{student.sno}}</p>
          </div>
          <div class="tableCell tableCellHalfPX">
            <p>{{student.timeStr}}</p>
          </div>
          <div class="tableCell tableCellHalfPX">
            <p>{{student.completionRate}}</p>
          </div>
          <div :class="student.time < 6300000 ? 'tableCell tableCellHalfPX' : 'tableCell tableCellHalfPX tableCellColor'">
            <div v-if="student.time < 6300000">
              <p>差{{student.shortTime}}分</p>
              <p>加油！</p>
            </div>
            <div v-else>
              <p>真棒！</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 表格内容 --> 
      <div class="table" v-show="tableShow">
        <div class="tableRowth">
          <div class="tableCell">
            <p>排名</p>
          </div>
          <div class="tableCell">
            <p>姓名</p>
          </div>
          <div class="tableCell">
            <p>阅读时间</p>
          </div>
          <div class="tableCell">
            <p>阅读完成率</p>
          </div>
          <div class="tableCell">
          </div>
        </div>
        <div class="tableRow">
          <div :class="retUser.index < 4 ? 'tableCell tableCellColor' : 'tableCell'">
            <p>{{retUser.index}}</p>
          </div>
          <div class="tableCell">
            <p>{{retUser.realName}}</p>
          </div>
          <div class="tableCell">
            <p>{{retUser.timeStr}}</p>
          </div>
          <div class="tableCell">
            <p>{{retUser.completionRate}}</p>
          </div>
          <div :class="retUser.time < 6300000 ? 'tableCell' : 'tableCell tableCellColor'">
            <div v-if="retUser.time < 6300000">
              <p>差{{retUser.shortTime}}分</p>
              <p>加油！</p>
            </div>
            <div v-else>
              <p>真棒！</p>
            </div>
          </div>
        </div>
        <div v-for="student in studentList" class="tableRow">
          <div :class="student.index < 4 ? 'tableCell tableCellColor' : 'tableCell'">
            <p>{{student.index}}</p>
          </div>
          <div class="tableCell tableCellHalfPX">
            <p>{{student.sno}}</p>
          </div>
          <div class="tableCell tableCellHalfPX">
            <p>{{student.timeStr}}</p>
          </div>
          <div class="tableCell tableCellHalfPX">
            <p>{{student.completionRate}}</p>
          </div>
          <div :class="student.time < 6300000 ? 'tableCell tableCellHalfPX' : 'tableCell tableCellHalfPX tableCellColor'">
            <div v-if="student.time < 6300000">
              <p>差{{student.shortTime}}分</p>
              <p>加油！</p>
            </div>
            <div v-else>
              <p>真棒！</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <!-- 无缝滚动加载插件 -->
    <infinite-loading @infinite="infiniteHandler" v-if="canLoading" :distance="distance" ref="infiniteLoading">
    </infinite-loading>
  </div>

</template>

<script>
import fetch from '../util/fetch'
import infiniteLoading from '../components/infiniteLoading'

export default{
  name: 'reportForParent',
  components: {
    infiniteLoading
  },
  data(){
    return {
      weekDefault:7,
      distance: 100,
      isNoMore: false,
      retUser:{
        completionRate:"0%",
        index:0,
        realName:"无",
        sno:"",
        time:0,
        timeStr:"00:00:00",
        shortTime:105,
        userId:0,
        ranking:0
      },
      retUserNull:false,
      studentList: [],
      currentPage: 1,
      pageSize: 10,
      total:0,
      startTime:"",
      endTime:"",
      startTimeStr:"0000.00.00",
      endTimeStr:"00.00",
      tableShow: false,
      bannerShow:true,
      headerFixed: false,
      canClick: false,
      canLoading: false,
      thisState:""
    }
  },
  mounted:function(){
    this.studentData(0)
    this.canLoading = false
    document.getElementById('rankingContent').addEventListener('scroll',this.handleScroll)
  },
  methods: {
    //滚动无缝请求
    infiniteHandler: function ($state) {
      if(this.canLoading == false){
        return
      }
      this.thisState = $state
      let params = this.$route.query
      params.currentPage = this.currentPage
      params.pageSize = this.pageSize
      params.startTime = this.startTime
      params.endTime = this.endTime
      // 数据请求
      fetch.getReadingWeeklyReport(params).then(res => {
        if(res.rows.length === 0){
          // 请求为空结束请求
          $state.complete()
          return
        }
        res.rows.forEach(item =>{
          item.timeStr = this.timeToStr(item.time)
          item.shortTime = this.shortTimeMin(item.time)
        })
        if(res.rows[0].index === this.studentList[this.studentList.length-1].index+1){
          this.studentList = this.studentList.concat(res.rows)
          this.currentPage++
        }
        res.rows = null
        $state.loaded()
      }).catch(err => {
        console.log("出错了",err)
      })
    },
    // banner开关
    bannerClose: function () {
      this.bannerShow=false
    },
    // 数据初始请求
    studentData: function(num){
      // 上下周跳转到顶部
      document.getElementById('rankingContent').scrollIntoView()
      // 上下周跳转初始化无缝加载
      if(this.thisState){
        this.thisState.reset()
      }
      let params = this.$route.query
      // 上下周设置
      this.weekDefault += num
      this.startTime = this.getTime(this.weekDefault)
      this.endTime = this.getTime(this.weekDefault-6)
      this.startTimeStr = this.startTime.replace(/-/g,".")
      this.endTimeStr = this.endTime.replace(/-/g,".").substring(5)
      // 上下周学生数据清空回到页面顶部
      this.studentList = null
      this.currentPage = 1
      params.currentPage = this.currentPage
      params.pageSize = this.pageSize
      params.startTime = this.startTime
      params.endTime = this.endTime
      fetch.getReadingWeeklyReport(params).then(res => {
        if(res.rows.length === 0){
          this.retUserNull = true
          return
        }
        //该学生数据设置
        this.total = res.total
        this.retUser = res.retUser
        this.retUser.ranking = parseInt(((res.total-res.retUser.index)/res.total)*100)
        this.retUser.timeStr = this.timeToStr(this.retUser.time)
        this.retUser.shortTime = this.shortTimeMin(this.retUser.time)
        // 学生列表设置
        this.studentList = res.rows
        this.studentList.forEach(item =>{
          item.timeStr = this.timeToStr(item.time)
          item.shortTime = this.shortTimeMin(item.time)
        })
        this.canLoading = true
        this.currentPage = 2
      }).catch(error => {
        console.log(error)
      })
    },
    prevWeek: function () {
      this.canLoading = false
      this.studentData(7)
      this.canClick = true
    },
    nextWeek: function () {
      this.canLoading = false
      this.studentData(-7)
      if(this.weekDefault == 7){
        // 下一周箭头点击控制
        this.canClick = false
        return
      } 
      this.canClick = true
    },
    // 列表头部吸顶
    handleScroll: function () {
      var scrollTop = document.getElementById('rankingContent').pageXOffset || document.getElementById('rankingContent').scrollTop || document.getElementById('rankingContent').scrollTop
      if(scrollTop > 140) {
        this.headerFixed = true
        this.tableShow = true
      } else {
        this.headerFixed = false;
        this.tableShow = false
      }
    }
  }
}

</script>
<style lang="less" scoped>
@import "../common/less/reportRanking.less";
</style>

