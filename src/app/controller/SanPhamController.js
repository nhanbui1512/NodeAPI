const dbHelper = require('./dbHelper')

class SanPhamController { 



    // /sanpham
    getAllProduct(req, res){
        var query = 'SELECT * FROM sanpham'
        dbHelper.getRecord(query)
        .then((rows) => {
            res.status(200).json(rows)
        })
    }

    // /sanpham/balo

    getAllBalo(req, res){
        var query = 'SELECT * FROM sanpham WHERE IDLoaiHang = 1'
        dbHelper.getRecord(query)
        .then((rows) => {
            res.status(200).json(rows)
        })
    }

    // /sanpham/jacket
    getAllJacket(req, res){
        var query = 'select * from sanpham where IDLoaiHang = 2'
        dbHelper.getRecord(query)
        .then((rows) => {
            res.status(200).json(rows)
        })
        .catch(() =>{
            res.status(400).json({
                message: "Error"
            })
        })
    }



    // /sanpham/tee
    getAllTee(req , res ){
        var query = 'select * from sanpham where IDLoaiHang = 3'
        dbHelper.getRecord(query)
        .then((rows) => {
            res.status(200).json(rows)
        })
        .catch(() =>{
            res.status(400).json({
                message: "Error"
            })
        })
    }


    // /sanpham/ID

    getSanPhamByID(req, res){
        var id = req.params.id
        var query =  `select * from sanpham where IDSanPham = '${id}'`
        dbHelper.getRecord(query)
        .then((rows) => {
            res.status(200).json(rows)
        })
        .catch(() =>{
            res.status(400).json({
                message: "Error"
            })
        })
    }


}
module.exports = new SanPhamController;