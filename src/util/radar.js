let scores=[
  {name: '进攻', max: 20, value: 19},
  {name: '防守', max: 20, value: 9},
  {name: '速度', max: 20, value: 18},
  {name: '力量', max: 20, value: 16},
  {name: '耐力', max: 20, value: 16},
  {name: '敏捷', max: 20, value: 20}
];

export let scoreRadar = {
  title: {
    text: '能力雷达图'
  },
  tooltip: {},
  radar:{
    indicator:scores.map(({name,max})=>{
      return {name,max}
    })
  },
  series: [{
    name: '能力值',
    smooth: true,
    type: 'radar',
    itemStyle:{
      normal:{
        barBorderRadius:[10,10,0,0],
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowBlur: 10,
        opacity:0.8,
        // color:'#d48265'
      }

    },
    data: [{value:scores.map(({value})=>value)}]
  }]
};
