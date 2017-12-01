import _defineProperty from 'babel-runtime/helpers/defineProperty';

var _radar;

var echarts = require('echarts/lib/echarts');

var scores = [{ name: '整体感知', max: 100, value: 0 }, { name: '实际应用', max: 100, value: 0 }, { name: '做出评价', max: 100, value: 0 }, { name: '形成解释', max: 100, value: 0 }, { name: '获取信息', max: 100, value: 0 }].map(function (_ref) {
  var name = _ref.name,
      max = _ref.max,
      value = _ref.value;

  var name = name + value + '%';
  return { name: name, max: max, value: value };
});

export var scoreRadarInitial = {
  title: {
    text: ''
  },
  grid: {
    top: 60,
    bottom: 0
  },
  tooltip: {},
  radar: {
    nameGap: 8,
    splitArea: {
      show: false
    },
    indicator: scores.map(function (_ref2) {
      var name = _ref2.name,
          max = _ref2.max;

      return { name: name, max: max };
    }),
    name: {
      color: '#9b9b9b',
      formatter: function formatter(params) {
        var arr = ['{align|' + params.slice(0, 4) + '}', '{align|0%}'];
        return arr.join('\n');
      },
      rich: {
        align: {
          align: 'center'
        }
      }
    },
    axisLine: {
      lineStyle: {
        width: 0.5,
        color: "#9b9b9b"
      }
    },
    splitLine: {
      lineStyle: {
        width: 0.5,
        color: "#9b9b9b"
      }
    }
  },
  series: [{
    type: 'radar',
    symbol: "none",
    data: [{
      value: [0, 0, 0, 0, 0],
      name: ['整体感知', '实际应用', '做出评价', '形成解释', '获取信息']
    }]
  }]
};

export var scoreRadarAsync = {
  title: {
    text: ''
  },
  tooltip: {
    formatter: function formatter(params) {
      var res = '<div><p>理解力</p></div>';
      for (var i = 0; i < params.value.length; i++) {
        res += '<p style="text-align:left">' + params.name[i] + ': ' + params.value[i] + '%' + '</p>';
      }
      return res;
    }
  },
  radar: (_radar = {
    name: {
      color: '#9b9b9b'
    },
    indicator: scores.map(function (_ref3) {
      var name = _ref3.name,
          max = _ref3.max;

      return { name: name, max: max };
    })
  }, _defineProperty(_radar, 'name', {
    color: '#9b9b9b',
    formatter: function formatter(params) {
      var arr = ['{align|' + params.slice(0, 4) + '}', '{align|' + params.slice(4) + '}'];
      return arr.join('\n');
    },
    rich: {
      align: {
        align: 'center'
      }
    }
  }), _defineProperty(_radar, 'axisLine', {
    lineStyle: {
      opacity: 0.5
    }
  }), _defineProperty(_radar, 'splitLine', {
    lineStyle: {
      opacity: 0.5
    }
  }), _radar),
  series: [{
    type: 'radar',
    itemStyle: {
      normal: {
        lineStyle: {
          opacity: 0.1,
          color: '#F7D319'
        }
      }
    },
    axisLabel: {
      textStyle: {
        fontSize: 10,
        color: "#9b9b9b"
      }
    },
    data: [{
      value: scores.map(function (_ref4) {
        var value = _ref4.value;
        return value;
      }),
      name: ['整体感知', '实际应用', '做出评价', '形成解释', '获取信息'],
      label: {
        normal: {
          show: true,
          formatter: function formatter(params) {
            return params.value + '%';
          }
        }
      },
      areaStyle: {
        normal: {
          opacity: 0.5,
          color: "#F7D319"
        }
      }
    }]
  }]
};

//# sourceMappingURL=underRadar-compiled.js.map