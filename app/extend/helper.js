/**
 * @作者 wangchn86@163.com
 * @创建时间 2020/6/9 3:14 下午
 */
const moment = require('moment')

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow()
