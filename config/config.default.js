/**
 * @作者 wangchn86@163.com
 * @创建时间 2020/6/9 11:13 上午
 */


exports.keys = '123456'

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
}

// 关闭安全威胁csrf
exports.security = {
  csrf: {
    enable: false,
  },
}


