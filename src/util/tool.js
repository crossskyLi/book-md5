// 日期字符串
function timeToStr(readtime) {
  var newTime = parseInt(readtime / 1000);
  var secondString = '';
  var minString = '';
  var hourString = '';
  if (newTime % 60 < 10) {
    secondString = "0" + newTime % 60;
  }
  if (newTime % 60 >= 10) {
    secondString = newTime % 60;
  }
  if (newTime < 60) {
    minString = "00:",
      hourString = "00:"
  }
  if (newTime >= 60 && 0 < parseInt(newTime / 60 % 60) < 10) {
    minString = "0" + parseInt(newTime / 60 % 60) + ':'
  }
  if (newTime >= 60 && parseInt(newTime / 60 % 60) >= 10) {
    minString = parseInt(newTime / 60 % 60) + ':'
  }
  if (parseInt(newTime) < 60 * 60) {
    hourString = "00:"
  }
  if (parseInt(newTime / 60 / 60) > 0 && 0 < parseInt(newTime / 60 / 60 % 24) < 10) {
    hourString = "0" + parseInt(newTime / 60 / 60 % 24) + ':'
  }
  if (parseInt(newTime / 60 / 60) > 0 && parseInt(newTime / 60 / 60 % 24) >= 10) {
    hourString = parseInt(newTime / 60 / 60 % 24) + ':'
  }
  if (parseInt(newTime / 60 / 60 / 24) > 0) {
    hourString = parseInt(newTime / 60 / 60 / 24) * 24 + parseInt(newTime / 60 / 60 % 24) + ':';
  }
  return hourString + minString + secondString;
}

// 获取上一周时间
function getTime(n) {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var day = now.getDay();
  if (day !== 0) {
    n = n + (day - 1);
  }
  else {
    n = n + day;
  }
  if (day) {
    if (month > 1) {
      month = month;
    }
    else {
      year = year - 1;
      month = 12;
    }
  }
  now.setDate(now.getDate() - n);
  year = now.getFullYear();
  month = now.getMonth() + 1;
  date = now.getDate();
  var s = year + "." + (month < 10 ? ('0' + month) : month) + "." + (date < 10 ? ('0' + date) : date);
  return s;
}

export default {
  install(Vue, options) {
    Vue.prototype.timeToStr = timeToStr;
    Vue.prototype.getTime = getTime;
  },

}
