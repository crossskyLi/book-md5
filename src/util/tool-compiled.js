function httpGet() {}

function httpPost() {}

export default {
  install: function install(Vue, options) {
    console.log(options);
    Vue.prototype.$httpGet = httpGet;
    Vue.prototype.$httpPost = httpPost;
  }
};

//# sourceMappingURL=tool-compiled.js.map
