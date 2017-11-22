import _Promise from 'babel-runtime/core-js/promise';
import axios from 'axios';
import qs from 'qs';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://116.62.8.201:3600/';

//POST传参序列化
axios.interceptors.request.use(function (config) {
  // if(config.method  === 'post'){
  //   config.data = qs.stringify(config.data);
  // }
  // console.log(config)
  if (localStorage.AuthToken) {
    //token验证
    axios.defaults.headers[config.method]['Authorization'] = localStorage.AuthToken;
  }
  return config;
}, function (error) {
  console.log('error', error);
  return _Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use(function (res) {
  if (res.data.errcode) {
    //在这一层做请求回来的errcode不为0的异常处理
    console.log(res.data.errmsg);
    return _Promise.reject(res);
  }
  return res.data;
}, function (error) {
  //在这一层做网络请求异常处理
  console.log('网络异常', error);
  // _.toast("网络异常");
  return _Promise.reject(error);
});

export function fetch(model, url, params) {
  return new _Promise(function (resolve, reject) {
    var reqUrl = url;
    // console.log(reqData)
    if (model === 'get') {
      reqUrl = reqUrl + '?' + qs.stringify(params);
    }
    axios[model](reqUrl, params).then(function (response) {
      resolve(response.retobj);
    }, function (err) {
      reject(err);
    }).catch(function (error) {
      reject(error);
    });
  });
}

export function fetchMulti(requestArr) {
  axios.all(requestArr).then(axios.spread(function (acct, perms) {}));
}

export default {
  /**
   * 用户登录
   */
  getReadingWeeklyReport: function getReadingWeeklyReport(params) {
    return fetch('get', '/reading/getReadingWeeklyReport', params);
  },


  /**
   * 测试post
   */
  testPost: function testPost(params) {
    return fetch('post', '/reading/demo', params);
  },

  /**
   * 测试多个请求并发
   */
  testFetchMulti: function testFetchMulti(requestArr) {
    return fetchMulti(requestArr);
  }
};

//# sourceMappingURL=fetch-compiled.js.map