/**
 * @作者 wangchn86@163.com
 * @创建时间 2020/6/9 11:45 上午
 */
const Controller = require('egg').Controller

class NewsController extends Controller {

  async list() {
    // const dataList = {
    //   list: [
    //     {
    //       id: 1, title: 'this is news1', url: '/news/1',
    //     }, {
    //       id: 2, title: 'this is news2', url: '/news/2',
    //     },
    //   ]
    // }
    //
    // await this.ctx.render('news/list.tpl', dataList)

    const ctx = this.ctx
    const page = ctx.query.page || 1
    const newsList = await ctx.service.news.list(page)
    await ctx.render('news/list.tpl', {list: newsList})
  }

}

module.exports = NewsController
