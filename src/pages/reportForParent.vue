<template>

  <div class="reportForParent">
    <div class="banner">
      <div class="bannerText" v-show="bannerShow? true:false">
        <div class="bannerMid">
          <p>专家表明：3-6年级学生每天阅读时间至少15分钟</p>
          <i class="el-icon-close" @click="bannerClose"></i>
        </div>
      </div>
      <h3>您的孩子击败了{{parseInt(((total-tetUser.index)/total)*100)}}%的同学，继续加油！</h3>
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
      <div id="headerFixed" v-show="headerFixed == false" :class="headerFixed == false ? 'table' : 'table tableHeader'">
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
          <div :class="tetUser.index < 4 ? 'tableCell tableCellColor' : 'tableCell'">
            <p >{{tetUser.index}}</p>
          </div>
          <!-- <div :class="tetUser.index < 4 ? 'tableCell' : 'tableCell tableCellColor'">
            <p>{{tetUser.index}}</p>
          </div> -->
          <div class="tableCell">
            <p>{{tetUser.realName}}</p>
          </div>
          <div class="tableCell">
            <p>
              {{tetUser.timeStr}}
            </p>
          </div>
          <div class="tableCell" >
            <p>{{tetUser.completionRate}}</p>
          </div>
          <div :class="tetUser.time < 5400000 ? 'tableCell tableCellColor' : 'tableCell'">
            <div v-if="tetUser.time < 5400000">
              <p>别气馁</p>
              <p>加油！</p>
            </div>
            <div v-else-if="tetUser.time < 6300000">
              <p>相信你</p>
              <p>会更好</p>
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
          <div :class="student.time < 5400000 ? 'tableCell tableCellColor' : 'tableCell'">
            <div v-if="student.time < 5400000">
              <p>别气馁</p>
              <p>加油！</p>
            </div>
            <div v-else-if="student.time < 6300000">
              <p>相信你</p>
              <p>会更好</p>
            </div>
            <div v-else>
              <p>真棒！</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 表格内容 -->
      <div class="table" v-show="headerFixed != false">
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
          <div :class="tetUser.index < 4 ? 'tableCell tableCellColor' : 'tableCell'">
            <p>
              {{tetUser.index}}
            </p>
          </div>
          <div class="tableCell">
            <p>{{tetUser.name}}</p>
          </div>
          <div class="tableCell">
            <p>
              {{tetUser.timeStr}}
            </p>
          </div>
          <div class="tableCell">
            <p>{{tetUser.completionRate}}</p>
          </div>
          <div :class="tetUser.time < 5400000 ? 'tableCell tableCellColor' : 'tableCell'">
            <div v-if="tetUser.time < 5400000">
              <p>别气馁</p>
              <p>加油！</p>
            </div>
            <div v-else-if="tetUser.time < 6300000">
              <p>相信你</p>
              <p>会更好</p>
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
          <div :class="student.time < 5400000 ? 'tableCell tableCellColor' : 'tableCell'">
            <div v-if="student.time < 5400000">
              <p>别气馁</p>
              <p>加油！</p>
            </div>
            <div v-else-if="student.time < 6300000">
              <p>相信你</p>
              <p>会更好</p>
            </div>
            <div v-else>
              <p>真棒！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler" v-if="isInfiniteCanWork" :distance="distance" ref="infiniteLoading"></infinite-loading>
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
        tetUser: [],
        studentList: [],
        currentPage: 1,
        pageSize: 10,
        total: "",
        startTime: "2017.11.06",
        endTime: "11.12",
        bannerShow: true,
        headerFixed: false,
        canClick: false,
        isInfiniteCanWork:false
      }
    },

    beforeMount: function () {
      let params = this.$route.query;

      params.currentPage = this.currentPage;
      params.pageSize = this.pageSize;
      if(!params.userId){
        //加提示
        return;
      }
      fetch.getReadingWeeklyReport(params).then(res => {
        this.total = res.total;
        this.tetUser = res.retUser;
        res.rows.forEach(item =>{
          item.timeStr = this.readTimeToStr(item.time );
        });

        this.studentList = res.rows;
        this.tetUser.timeStr = this.readTimeToStr(this.tetUser.time);
        this.currentPage = 2;
        this.isInfiniteCanWork = true;
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
          console.log('执行了吗?')
          let params = this.$route.query;
          params.currentPage = this.currentPage;
          params.pageSize = this.pageSize;
          fetch.getReadingWeeklyReport(params).then(res => {
            if(res.rows.length === 0){
              $state.complete();
              return;
            }
            res.rows.forEach(item =>{
              item.timeStr = this.readTimeToStr(item.time );
            });
            this.currentPage++;
            this.studentList = this.studentList.concat(res.rows);
            $state.loaded();
          }).catch(err => {
            console.log(err)
          });
        },
        bannerClose: function () {
          console.log(this.bannershow )
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

