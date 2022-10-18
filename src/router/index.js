const SanPhamRouter = require('./sanpham.router')
const accountRouter = require('./account.router')
const orderRouter = require('./order.router')
const loaihangRouter = require('./loaihang.router')



function route(app){
    app.use('/sanpham',SanPhamRouter)
    app.use('/account', accountRouter)
    app.use('/orders', orderRouter)
    app.use('/loaihang', loaihangRouter)
}
module.exports = route;