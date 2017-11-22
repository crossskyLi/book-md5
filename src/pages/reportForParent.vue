<template>

  <div class="reportForParent">
    <div class="banner">
      <div class="bannerText" v-show="bannerShow">
        <div class="bannerMid">
          <p>专家表明：3-6年级学生每天阅读时间至少15分钟</p>
          <i class="el-icon-close" @click="bannerClose"></i>
        </div>
      </div>
      <h3 v-if="retUserNull">您的孩子击败了0%的同学</h3>
      <h3 v-else>您的孩子击败了{{parseInt(((total-retUser.index)/total)*100)}}%的同学</h3>
      <div class="bottom">
        <span></span>
        <p>每周日24时结算</p>
        <span></span>
      </div>
      <div :class="headerFixed == false ? 'weekBox' : 'weekBox weekBoxFixed'">
        <!-- 上下周功能搁置 -->
        <!-- <i class="el-icon-arrow-left"></i> -->
        <p class="week">
          {{startTime}}-{{endTime}}阅读报告
        </p>
        <!-- <i :class="canClick == ture ? 'el-icon-arrow-right' : 'el-icon-arrow-right icongray'"></i> -->
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
            <p>
              {{retUser.timeStr}}
            </p>
          </div>
          <div class="tableCell" >
            <p>{{retUser.completionRate}}</p>
          </div>
          <div :class="retUser.time < 5400000 ? 'tableCell' : 'tableCell tableCellColor'">
            <div v-if="retUser.time < 5400000">
              <p>加油！</p>
            </div>
            <div v-else>
              <p>真棒！</p>
            </div>
          </div>
        </div>
        <div v-for="student in studentList" :class="headerFixed == false ? 'tableRow' : 'tableRow headerhidden'">
          <div :class="student.index < 4 ? 'tableCell tableCellColor' : 'tableCell'">
            <p>{{student.index}}</p>
          </div>
          <div class="tableCell">
            <p>{{student.sno}}</p>
          </div>
          <div class="tableCell">
            <p>
              {{student.timeStr}}
            </p>
          </div>
          <div class="tableCell">
            <p>{{student.completionRate}}</p>
          </div>
          <div :class="student.time < 5400000 ? 'tableCell' : 'tableCell tableCellColor'">
            <div v-if="student.time < 5400000">
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
            <p>
              {{retUser.index}}
            </p>
          </div>
          <div class="tableCell">
            <p>{{retUser.realName}}</p>
          </div>
          <div class="tableCell">
            <p>
              {{retUser.timeStr}}
            </p>
          </div>
          <div class="tableCell">
            <p>{{retUser.completionRate}}</p>
          </div>
          <div :class="retUser.time < 5400000 ? 'tableCell' : 'tableCell tableCellColor'">
            <div v-if="retUser.time < 5400000">
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
          <div class="tableCell">
            <p>{{student.sno}}</p>
          </div>
          <div class="tableCell">
            <p>
              {{student.timeStr}}
            </p>
          </div>
          <div class="tableCell">
            <p>{{student.completionRate}}</p>
          </div>
          <div :class="student.time < 5400000 ? 'tableCell' : 'tableCell tableCellColor'">
            <div v-if="student.time < 5400000">
              <p>加油！</p>
            </div>
            <div v-else>
              <p>真棒！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler" v-if="canLoading" :distance="distance" ref="infiniteLoading">
    </infinite-loading>
  </div>

</template>

<script>
  import fetch from '../util/fetch'
  import infiniteLoading from '../components/infiniteLoading'

  export default {
    name: 'reportForParent',
    components: {
      infiniteLoading
    },
    data() {
      return {
        distance: 100,
        isNoMore: false,
        list: [],
        retUser:{
          completionRate:"0%",
          index:0,
          realName:"无",
          sno:"",
          time:0,
          timeStr:"00:00:00",
          userId:0
        },
        retUserNull:false,
        studentList: [],
        currentPage: 1,
        pageSize: 10,
        total:0,
        startTime:"",
        endTime:"",
        tableShow: false,
        bannerShow:true,
        headerFixed: false,
        canClick: false,
        canLoading: false
      }
    },

    beforeMount: function () {
      let params = this.$route.query;

      params.currentPage = this.currentPage;
      params.pageSize = this.pageSize;
      this.startTime = this.getTime(7);
      this.endTime = this.getTime(1).substring(5);
      if (!params.userId) {
        //加提示
        return;
      }
      fetch.getReadingWeeklyReport(params).then(res => {
        this.total = res.total;
        this.tetUser = res.retUser;

        res.rows.forEach(item => {
          item.timeStr = this.timeToStr(item.time);
        });
        this.studentList = res.rows;
        this.tetUser.timeStr = this.timeToStr(this.tetUser.time);
        this.currentPage = 2;
        this.retUser.timeStr = this.timeToStr(this.retUser.time);
        this.canLoading = true;
        this.currentPage = 2;
      }).catch(err => {
        console.log(err)
      });
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods:
      {
        infiniteHandler: function ($state) {

          let params = this.$route.query;
          params.currentPage = this.currentPage;
          params.pageSize = this.pageSize;
          fetch.getReadingWeeklyReport(params).then(res => {
            if (res.rows.length === 0) {
              $state.complete();
              return;
            }
            res.rows.forEach(item => {
              item.timeStr = this.timeToStr(item.time);
            });
            this.currentPage++;
            this.studentList = this.studentList.concat(res.rows);
            $state.loaded();
          }).catch(err => {
            console.log(err)
          });
        },
        bannerClose: function () {
          this.bannerShow = false
        },
        handleScroll: function () {
          let scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop > 182) {
            this.headerfixed = true
          } else {
            this.headerfixed = false
          }
        }
      }
  }
</script>
<style lang="less" scoped>
  @import "../common/less/reportForParent.less";
</style>

