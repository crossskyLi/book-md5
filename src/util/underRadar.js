
let echarts = require('echarts/lib/echarts')

let scores=[
{ name: '整体感知', max: 100, value: 0},
{ name: '实际应用', max: 100, value: 0},
{ name: '做出评价', max: 100, value: 0},
{ name: '形成解释', max: 100, value: 0},
{ name: '获取信息', max: 100, value: 0}
].map(({name,max,value})=>{
  var name=name+value+'%';
  return {name,max,value}
})

export let scoreRadarInitial = {
  title: {
    text: ''
  },
  grid:{
    top: 60,
    bottom: 0,
  },
  tooltip: {},
  radar:{
    nameGap:8,
    splitArea : {
      show : false,
    },
    indicator: scores.map(({name,max})=>{
      return {name,max}
    }),
    name:{
      color: '#9b9b9b',
      formatter: function (params) {
        var arr = [
        '{align|'+params.slice(0,4)+'}',
        '{align|0%}'
        ];
        return arr.join('\n')
      },
      rich:{
        align:{
          align:'center'
        }
      }
    },
    axisLine: {
      lineStyle: {
        width: 0.5,
        color:"#9b9b9b",
      }
    },
    splitLine: {
      lineStyle: {
        width: 0.5,
        color:"#9b9b9b",
      }
    },
  },
  series: [{
    type: 'radar',
    symbol: "none",
    data : [{
      value : [0,0,0,0,0],
      name : ['整体感知','实际应用', '做出评价', '形成解释','获取信息'],
    }]
  }]
}

export let scoreRadarAsync = {
  title: {
    text: ''
  },
  tooltip: {   
    formatter: function (params) {
      var res='<div><p>理解力</p></div>';
      for(var i=0;i<params.value.length;i++){
        res+='<p style="text-align:left">'+params.name[i]+': '+params.value[i]+'%'+'</p>'
      }
      return res;
    },
  },
  radar:{
    name: {
      color: '#9b9b9b',
    },
    indicator: scores.map(({name,max})=>{
      return {name,max}
    }),
    name:{
      color: '#9b9b9b',
      formatter: function (params) {
        var arr = [
        '{align|'+params.slice(0,4)+'}',
        '{align|'+params.slice(4,)+'}'
        ];
        return arr.join('\n')
      },
      rich:{
        align:{
          align:'center'
        }
      }
    },
    axisLine: {
      lineStyle: {
        opacity: 0.5,
      }
    },
    splitLine: {
      lineStyle: {
        opacity: 0.5,
      }
    },
  },
  series: [{
    type: 'radar',
    itemStyle : {
      normal: {
        lineStyle:{
          opacity: 0.1,
          color:'#F7D319'
        },
      }
    },
    axisLabel: {
      textStyle:{  
        fontSize: 10,
        color:"#9b9b9b"  
      } 
    },
    data : [{
      value : scores.map(({value})=>value),
      name : ['整体感知','实际应用', '做出评价', '形成解释','获取信息'],
      label: {
        normal: {
          show: true,
          formatter:function(params) {
            return params.value+'%';
          }
        }
      },
      areaStyle: {
        normal: {
          opacity: 0.5,
          color:"#F7D319"
        }
      }
    }]
  }]
}