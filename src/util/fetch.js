import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://116.62.8.201:3600/';
// axios.defaults.baseURL = 'http://192.168.0.41:3600/';//测试服
//POST传参序列化
axios.interceptors.request.use((config) => {
  // if(config.method  === 'post'){
  //   config.data = qs.stringify(config.data);
  // }
  // console.log(config)
  if (localStorage.AuthToken) {
    //token验证
    axios.defaults.headers[config.method]['Authorization'] = localStorage.AuthToken;
  }
  return config;
}, (error) => {
  console.log('error', error);
  return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.errcode) {
    //在这一层做请求回来的errcode不为0的异常处理
    console.log(res.data.errmsg);
    return Promise.reject(res);
  }
  return res.data;
}, (error) => {
  //在这一层做网络请求异常处理
  console.log('网络异常',error);
  // _.toast("网络异常");
  return Promise.reject(error);
});

export function fetch(model, url, params) {
  return new Promise((resolve, reject) => {
    let reqUrl = url;
    // console.log(reqData)
    if (model === 'get') {
      reqUrl = reqUrl + '?' + qs.stringify(params);
    }
    axios[model](reqUrl, params)
      .then(response => {
        resolve(response.retobj);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchMulti(requestArr) {
  axios.all(requestArr).then(axios.spread(function (acct, perms) {

  }))
}

export default {
  /**
   * 学生阅读排名
   */
  getReadingWeeklyReport(params) {
    return fetch('get', '/reading/getReadingWeeklyReport', params)
  },

  /**
   * 学生阅读数据分析
   */
  getReadingAnalysis(params) {
    return fetch('get', '/reading/getReadingAnalysis', params)
  },

  /**
   * 测试post
   */
  testPost(params) {
    return fetch('post', '/reading/demo', params)
  },
  /**
   * 测试多个请求并发
   */
  testFetchMulti: function (requestArr) {
    return fetchMulti(requestArr)
  },
}
