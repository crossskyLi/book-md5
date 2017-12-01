
// 日期字符串
function timeToStr (readtime) {
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
  if (parseInt(newTime) < 60 * 60){
    hourString = "00:"
  }
  if (parseInt(newTime / 60 / 60) > 0 && 0 < parseInt(newTime / 60 / 60 % 24) < 10) {
    hourString = "0" + parseInt(newTime / 60 / 60 % 24) + ':'
  }
  if (parseInt(newTime / 60 / 60) > 0 && parseInt(newTime / 60 / 60 % 24) >= 10) {
    hourString = parseInt(newTime / 60 / 60 % 24) + ':'
  }
  if (parseInt(newTime / 60 / 60 / 24) > 0 ){
    hourString = parseInt(newTime / 60 / 60 / 24)*24 + parseInt(newTime / 60 / 60 % 24) + ':';
  }
  return hourString + minString + secondString;
}

// 还差分钟字符串
function shortTimeMin (readtime) {
  var newTime = parseInt(readtime / 1000 / 60);
  var minString = '';
  if (newTime < 105) {
    minString = parseInt(105-newTime)
  }else{
    return 0
  }
  return minString;
}

// 获取上一周时间
function getTime(n){
  var now=new Date();
  var year=now.getFullYear();
  var month=now.getMonth()+1;
  var date=now.getDate();
  var day=now.getDay();
  if(day!==0){
    n=n+(day-1);
  }
  else{
    n=n+day;
  }
  if(day){
    if(month>1){
      month=month;
    }
    else{
      year=year-1;
      month=12;
    }
  }
  now.setDate(now.getDate()-n);
  year=now.getFullYear();
  month=now.getMonth()+1;
  date=now.getDate();
  var s=year+"-"+(month<10?('0'+month):month)+"-"+(date<10?('0'+date):date);
  return s;
}

// 阅读时长分钟原数据为秒保留一位小数
function readingNumToMinStr (readtime) {
  var minString = (readtime / 60).toFixed(1);
  var minLast = minString.charAt(minString.length - 1);
  if(minLast == 0){
    minString = parseInt(minString)
  }
  return minString
}

// 阅读时长小时保留一位小数
function readingNumToHourStr (readtime) {
  var hourString = (readtime / 60 / 60).toFixed(1);
  var hourLast = hourString.charAt(hourString.length - 1);
  if(hourLast == 0){
    hourString = parseInt(hourString)
  }
  return hourString
}

// 阅读量万字
function readingNumToStr (readingNum) {
  var newReadingNum = (readingNum / 60 / 60).toFixed(1);
  var newReadingNumLast = newReadingNum.charAt(newReadingNum.length - 1);
  if(newReadingNumLast == 0){
    newReadingNum = parseInt(newReadingNum)
  }
  return newReadingNum;
}

//计算阅读分布百分比
function GetPercent(num, total) {
  num = parseFloat(num);
  total = parseFloat(total);
  return total <= 0 ? "0" : (Math.round(num / total * 10000) / 100.00);
}


export default {
  install(Vue, options) {
    Vue.prototype.timeToStr = timeToStr;
    Vue.prototype.getTime = getTime;
    Vue.prototype.shortTimeMin = shortTimeMin;
    Vue.prototype.readingNumToMinStr = readingNumToMinStr;
    Vue.prototype.readingNumToHourStr = readingNumToHourStr;
    Vue.prototype.readingNumToStr = readingNumToStr;
    Vue.prototype.GetPercent = GetPercent;
  },

}
