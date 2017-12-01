<template>

	<div class="reportForms" id="formsContent">
		<div class="readingTatol">
      <div v-if="readingNumMin<60">
        <h3><span>{{readingNumMin}}</span>分钟</h3>
        <h3>阅读时长</h3>
      </div>
      <div v-else>
        <h3><span>{{readingNumHour}}</span>小时</h3>
        <h3>阅读时长</h3>
      </div>
      <div v-if="readingNum<10000">
        <h3><span>{{readingNum}}</span>字</h3>
        <h3>阅读量</h3>
      </div>
      <div v-else>
        <h3><span>{{readingNumStr}}</span>万字</h3>
        <h3>阅读量</h3>
      </div>
      <div>
        <h3><span>{{allReadBooksNum}}</span>本</h3>
        <h3>阅读书籍</h3>
      </div>
    </div>
    <p class="halfPX"></p>
    <div class="item">
      <p class="itemTitle">您的孩子更喜欢在{{dayMin}}-{{dayMax}}看书</p>
      <eCharts :options="allDayBar" ref="allDayBar"></eCharts>
    </div>
    <div class="itemSeparate"></div>
    <div class="item">
      <p class="itemTitle">阅读专注力轨迹</p>
      <eCharts :options="allWeekBar" ref="allWeekBar"></eCharts>
    </div>
    <div class="itemSeparate"></div>
    <div class="item">
      <p class="itemTitle">阅读理解能力维度正确率</p>
      <eCharts class="scoreRadar" :options="scoreRadar" ref="scoreRadar"></eCharts>
    </div>
    <div class="itemSeparate"></div>
    <div class="item">
      <p class="itemTitle readingDistriTitle">
        阅读分布
        <b class="halfPX"></b>
      </p>
      <div class="readingDistribution clearfix">
        <ul class="" v-for="distribution in readingDistri">
          <li class="left">
            <b class="left" :style="{backgroundColor : '#'+distribution.bgc}"></b>
            <span class="left">{{distribution.style}}</span>
            <i class="left">{{distribution.data}}%</i>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>

import fetch from '../util/fetch'

import {allDayBarInitial as allDayBarInit, allDayBarAsync as allDayBarAsync} from '../util/allDayBar'
import {allWeekBarInitial as allWeekBarInit, allWeekBarAsync as allWeekBarAsync} from '../util/allWeekBar'
import {scoreRadarInitial as scoreRadarInit, scoreRadarAsync as scoreRadarAsync} from '../util/underRadar'


export default{
	name: 'reportForms',
	data(){
		return {
			readingNum: 0,
      readingNumStr: 0,
      allReadBooksNum: 0,
      readingNumMin: 0,
      readingNumHour: 0,
      allDayBar: allDayBarInit,
      allWeekBar: allWeekBarInit,
      scoreRadar: scoreRadarInit,
      dayMaxIndex:0,
      dayMax:"00:00",
      dayMin:"00:00",
      //23个时间段23个数据,横轴24个时间点,往00:00追加0数据
      dayDataY:['0',],
      weekDataY:[],
      radarDataX:[],
      radarDataY:[],
      radarDataName:[],
      readingDistri: [
      {style:"童话故事",data:0,bgc:'63d598'},
      {style:"科普灵异",data:0,bgc:'ea7c7d'},
      {style:"经典名著",data:0,bgc:'7c85ea'},
      {style:"科普百科",data:0,bgc:'9f79d4'},
      {style:"传记历史",data:0,bgc:'d5aa87'},
      {style:"诗歌散文",data:0,bgc:'7fd3d5'},
      {style:"幽默成长",data:0,bgc:'79b1d4'},
      {style:"寓言传说",data:0,bgc:'0a7c7d'},
      {style:"侦探冒险",data:0,bgc:'84a1e1'},
      {style:"国学经典",data:0,bgc:'fbc56b'},
      {style:"中小学辅导",data:0,bgc:'5a83f3'},
      ],
      color:[
      {bgc:'63d598'},
      {bgc:'ea7c7d'},
      {bgc:'7c85ea'},
      {bgc:'9f79d4'},
      {bgc:'d5aa87'},
      {bgc:'7fd3d5'},
      {bgc:'79b1d4'},
      {bgc:'0a7c7d'},
      {bgc:'84a1e1'},
      {bgc:'fbc56b'},
      {bgc:'5a83f3'},
      ],
    }
  },
  beforeMount(){
    this.studentAnalysis();
  },
  mounted() {
    // 挂载后跳转到顶部
    document.getElementById('formsContent').scrollIntoView()
    //图表数据加载
    this.seconds = 1;
    let allDayBar = this.$refs.allDayBar;
    let allWeekBar = this.$refs.allWeekBar;
    let scoreRadar = this.$refs.scoreRadar;
    let loadText = {
      text: '正在加载',
      color: '#4ea397',
      maskColor: 'rgba(255, 255, 255, 0.4)'
    }
    //图表正在加载方法
    allDayBar.showLoading(loadText);
    allWeekBar.showLoading(loadText);
    scoreRadar.showLoading(loadText);
    let timer = setInterval(() => {
      this.seconds--;
      if (this.seconds === 0) {
        clearTimeout(timer)
        allDayBar.hideLoading()
        allDayBar.mergeOptions(allDayBarAsync)
        allWeekBar.hideLoading()
        allWeekBar.mergeOptions(allWeekBarAsync)
        scoreRadar.hideLoading()
        scoreRadar.mergeOptions(scoreRadarAsync)
      }
    }, 1000)
  },
  methods: {
    studentAnalysis(){
      let params = {userId:this.$route.query.userId};
      fetch.getReadingAnalysis(params).then(res => {
        if(res.length === 0){
          return;
        }
        //汇总数据
        this.readingNum = res.readingNum
        this.readingNumMin = this.readingNumToMinStr(res.totalReadingTime)
        this.readingNumHour = this.readingNumToHourStr(res.totalReadingTime)
        this.readingNumStr = this.readingNumToStr(res.readingNum)
        this.allReadBooksNum = res.allReadBooksNum

        //每天阅读数据
        res.sumByHourReadingTime.arrReadingTimeOfHours.forEach(item =>{
          this.dayDataY.push(this.readingNumToMinStr(item))
        });
        allDayBarAsync.series.data = this.dayDataY
        //最喜欢阅读时间
        this.dayMaxIndex = res.sumByHourReadingTime.maxValue.time
        this.dayMax = allDayBarAsync.xAxis.data[this.dayMaxIndex]
        if(this.dayMaxIndex < 1){
          this.dayMin = allDayBarAsync.xAxis.data[24 - this.dayMaxIndex]
        }else{
          this.dayMin = allDayBarAsync.xAxis.data[this.dayMaxIndex - 1]
        }

        //每周阅读数据
        allWeekBarAsync.xAxis.data = res.readingTimeByWeek.arrKeys
        res.readingTimeByWeek.arrDays.forEach(item =>{
          this.weekDataY.push(this.readingNumToMinStr(item))
        });
        allWeekBarAsync.series[0].data = this.weekDataY

        //理解能力正确率
        res.radarChartData.forEach(item =>{
          this.radarDataName.push(item.dimensionName)
          this.radarDataY.push(item.accuracy*100)
          this.radarDataX.push({
            name:item.dimensionName + item.accuracy*100 + '%',
            max:100,
            value:item.accuracy*100
          })
        });
        // 雷达图纵坐标
        scoreRadarAsync.radar.indicator = this.radarDataX
        // 雷达图弹框类目
        scoreRadarAsync.series[0].data[0].name = this.radarDataName
        // 雷达图实际值
        scoreRadarAsync.series[0].data[0].value = this.radarDataY

        //阅读分布数据,默认值赋值为空
        this.readingDistri = []
        res.bookCategory.forEach((item,index) =>{
          this.readingDistri.push({style:item.categoryName,
            data:this.GetPercent(item.bookNum,item.totalBookNum),
            bgc:this.color[index].bgc
          })
        });
      }).catch(error => {
        console.log(error)
      });
    }
  }
}
</script>
<style lang="less" scoped>
@import "../common/less/reportForms.less";
</style>