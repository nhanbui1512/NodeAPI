const SanPhamRouter = require('./sanpham.router')

function route(app){
    app.use('/sanpham',SanPhamRouter)
}
module.exports = route;