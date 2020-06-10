/**
 * @作者 wangchn86@163.com
 * @创建时间 2020/6/9 5:07 下午
 */

const Controller = require('egg').Controller

class ProductController extends Controller {

  async index() {
    const { ctx } = this
    ctx.body = 'wangchen'
  }

  // get
  async detail() {
    const { ctx } = this
    console.log('请求参数：', ctx.query)
    ctx.body = `${ JSON.stringify(ctx.query) }`
  }

  // get params
  async detail2() {
    const { ctx } = this
    console.log('请求参数', ctx.params)
    ctx.body = `${ JSON.stringify(ctx.params) }`
  }

  // post
  async create() {
    const { ctx } = this
    console.log('请求参数', ctx.request.body)
    const { name, weight } = ctx.request.body
    ctx.body = {
      name,
      weight,
    }
  }

  // put
  async update(){
    const { ctx } = this
    console.log('请求参数', ctx.params)
    const {name, weight} = ctx.params
    ctx.body = {
      name,
      weight,
    }
  }

  async delete(){
    const { ctx } = this
    console.log('请求参数', ctx.request.body)
    ctx.body = {
      name: "wangchen"
    }
  }

}

module.exports = ProductController
