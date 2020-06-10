/**
 * @作者 wangchn86@163.com
 * @创建时间 2020/6/9 11:11 上午
 */

module.exports = app => {

  const {router, controller} = app
  router.get('/', controller.home.index)
  router.get('/news', controller.news.list)
  router.get('/product', controller.product.index)
  router.get('/detail', controller.product.detail)
  router.get('/detail2/:id/:name', controller.product.detail2)
  router.post('/create', controller.product.create)
  router.put('/update/:name/:weight',controller.product.update)
  router.delete('/delete', controller.product.delete)
}
