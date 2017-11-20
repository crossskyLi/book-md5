
// 日期字符串
function readTimeToStr (readtime) {
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


export default {
	install(Vue, options) {
		Vue.prototype.readTimeToStr = readTimeToStr;
	},

}
