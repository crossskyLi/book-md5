<template>

  <div class="reportForParent">
    <div class="banner">
      <h1>太棒了!</h1>
      <h3>击败了好多好多同学,好好努力</h3>
      <div class="bottom">
        <span></span>
        <p>每周日24时结算</p>
        <span></span>
      </div>
    </div>
    <el-container>
      <el-main>
        <el-button @click="showStudentList">显示列表</el-button>
        <el-row>
          <el-col :span="4"><div>排名</div></el-col>
          <el-col :span="5"><div>学生姓名</div></el-col>
          <el-col :span="5"><div>阅读时间</div></el-col>
          <el-col :span="5"><div>阅读率</div></el-col>
          <el-col :span="5"><div>评价</div></el-col>
        </el-row>
        <el-row v-for="student in studentList" :key="student.index">
          <el-col :span="4"><div>{{student.index}}</div></el-col>
          <el-col :span="5"><div>{{student.studentName}}</div></el-col>
          <el-col :span="5"><div>{{student.readingTime}}</div></el-col>
          <el-col :span="5"><div>{{student.rate}}</div></el-col>
          <el-col :span="5">
            <div>
              <p>{{student.tipStr[0]}}</p>
              <p>{{student.tipStr[1]}}</p>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <!--<el-container>-->
      <!--<el-main>-->

        <!--<el-table-->
          <!--:data="studentList"-->
          <!--border-->
          <!--max-height="250">-->
          <!--<el-table-column-->
            <!--prop="index"-->
            <!--label="排名"-->
            <!--align="center"-->
            <!--min-width="64">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--prop="studentName"-->
            <!--label="姓名"-->
            <!--min-width="64">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--prop="readingTime"-->
            <!--label="阅读时间"-->
            <!--min-width="64">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--prop="rate"-->
            <!--label="阅读完成率"-->
            <!--min-width="64">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--prop="tipStr"-->
            <!--label="状态"-->
            <!--min-width="64">-->
            <!--<template slot-scope="scope">-->
              <!--<p>{{scope.row.tipStr[0]}}</p>-->
              <!--<p>{{scope.row.tipStr[1]}}</p>-->
            <!--</template>-->
          <!--</el-table-column>-->
        <!--</el-table>-->

      <!--</el-main>-->
    <!--</el-container>-->
  </div>

</template>

<script>

  export default{
    name: 'reportForParent',
    data(){
      return {
        msg: '这里是家长周阅读报告',
        studentList: []
      }
    },
    mounted:function(){
      this.showStudentList();
    },
    methods: {
      showStudentList: function () {
        this.studentList = [
          {index: 1, studentName: '22', readingTime: '3232min', rate: '60%', tipStr: ['yi', 'er']},
          {index: 10, studentName: '22', readingTime: '620min', rate: '60%', tipStr: ['yi', 'er']},
          {index: 3, studentName: '12', readingTime: '6110min', rate: '60%', tipStr: ['yi', 'er']},
          {index: 3, studentName: '12', readingTime: '6110min', rate: '60%', tipStr: ['yi', 'er']},
          {index: 3, studentName: '12', readingTime: '60min', rate: '60%', tipStr: ['yi', 'er']},
          {index: 3, studentName: '12', readingTime: '60min', rate: '60%', tipStr: ['yi', 'er']},
          {index: 3, studentName: '12', readingTime: '60min', rate: '60%', tipStr: ['yi', 'er']},
          {index: 4, studentName: '12133', readingTime: '60min', rate: '60%', tipStr: ['yi', 'er']},
          {index: 5, studentName: '123', readingTime: '60min', rate: '60%', tipStr: ['yi', 'er']}
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../common/less/reportForParent.less";
</style>

