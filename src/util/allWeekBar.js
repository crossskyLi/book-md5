
let echarts = require('echarts/lib/echarts')

let asyncData = {
  categories:['00-00','00-00','00-00','00-00','00-00','00-00','00-00'],
  data: [0, 0, 0, 0, 0, 0, 0]
}

export let allWeekBarInitial = {
  title: {
    text: ''
  },
  grid:{
    top: 20,
    bottom: 20,
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      var res='<div><p>'+params[0].name+'</p></div>' 
      for(var i=0;i<params.length;i++){
        res+='<p>'+params[i].data+'分钟'+'</p>'
      }
      return res;
    }, 
  },
  xAxis: {
    splitLine:{
      show: false,
    },
    type: 'category',
    axisTick: {show: false},
    axisLine: {show: false},
    axisLabel:{
      interval: 0, 
      textStyle:{  
        fontSize: 10,
        color:"#9b9b9b" 
      }  
    },
    axisPointer:{
      lineStyle:{
        width: 0.5,
        color:"#9b9b9b",
        opacity: 0.3,
      }
    },
    boundaryGap: false,
    data: ['00-00','00-00','00-00','00-00','00-00','00-00','00-00']
  },
  yAxis: {
    splitLine:{
      show: false,
    },
    type: 'value',
    axisTick: {show: false},
    axisLine: {show: false},
    axisLabel: {
      textStyle:{
        fontSize: 10,
        color:"#9b9b9b",
      } 
    },
    data: [0, 0, 0, 0, 0, 0, 0]
  },
  series: [{
    type:'line',
    symbolSize: 4,
    itemStyle : {
      normal: {
        color:'#ff6464',
      }
    },
    lineStyle : {
      normal: {
        lineStyle:{color:'#ff6464'},
      }
    },
    areaStyle: {
      normal: {
        opacity: 0.2,
        color:"#ff6464"
      }
    },
  }]
}

export let allWeekBarAsync = {
  xAxis: {
    data: asyncData.categories,
    splitLine:{
      show: true,
      lineStyle: {
        width: 0.5,
        color:"#9b9b9b",
        opacity: 0.2,
      }
    },
  },
  yAxis: {
    splitLine:{
      show: true,
      lineStyle: {
        width: 0.5,
        color:"#9b9b9b",
        opacity: 0.2,
      }
    }, 
  },
  series: [{
    data: asyncData.data
  }]
}