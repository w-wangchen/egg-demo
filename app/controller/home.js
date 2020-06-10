/**
 * @作者 wangchn86@163.com
 * @创建时间 2020/6/9 11:08 上午
 */
const Controller = require('egg').Controller

class HomeController extends Controller {

  async index(){
    this.ctx.body = 'hello wangchen'
  }

}

module.exports = HomeController
