
let echarts = require('echarts/lib/echarts')

export let allDayBarInitial = {
  title: {
    text: ''
  },
  grid:{
    top: 20,
    right: 18,
    bottom: 20,
    left: 18
  },
  tooltip: {
    trigger: 'axis',
    axisPointer :{
      type: 'line',
      lineStyle:{
        width: 0.5,
        color:"#9b9b9b"
      },
      z:0
    },
    formatter: function (params) {
      var res='<div><p>'+params[0].name+'</p></div>'
      for(var i=0;i<params.length;i++){
        res+='<p>'+params[i].data+'分钟'+'</p>'
      }
      return res;
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLabel:{
      interval: 3,
      textStyle:{
        fontSize: 10,
        color:"#9b9b9b"
      }
    },
    axisPointer:{
      lineStyle:{
        color:"#9b9b9b",
        opacity: 0.3,
      }
    },
    axisLine: {show: false},
    splitLine: { show: false},
    axisTick: {show: false},
    data: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00']
  },
  yAxis: {
    splitLine:{show: false},
    name : '',
    type: 'value',
    axisLabel: {show: false},
    axisLine: {show: false},
    splitLine: { show: false},
    axisTick: {show: false},
    data: [0,0,0,0,0,0,0]
  },
  series: [{
    smooth:0.5,
    type:'line',
    symbol: "none",
    markPoint:{
      type: 'scatter',
      data: [{type: 'max', name: '最大值'}],
      symbol: "circle",
      symbolSize: 4,
      itemStyle : {
        normal: {
          color:'#ff6464',
          shadowColor: '#ff6464',
          shadowBlur: 10
        }
      },
      label: {
        normal: {
          show: false,
        }
      }
    },
    itemStyle : {
      normal: {
        lineStyle:{
          color:'#f9d132'
        },
      }
    },
  }]
}

let asyncData = {
  categories: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
  data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}

export let allDayBarAsync = {
  xAxis: {
    data: asyncData.categories
  },
  series: {
    data: asyncData.data,
  },
}
