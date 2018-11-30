module.exports = [
  {
    path: 'pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '首页',
      usingComponents: {
        "van-button": "/static/vant/button/index"
      }
    }
  }, {
    path: 'pages/counter',
    config: {
      navigationBarTitleText: 'counter示例',
      usingComponents: {
        "van-button": "/static/vant/button/index"
      }
    }
  }, {
    path: 'packageA/logs',
    subPackage: true,
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '查看启动日志'
    }
  }
]
