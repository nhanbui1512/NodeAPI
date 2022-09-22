const dbHelper = require('./dbHelper')

class SanPhamController { 

    getAllProduct(req, res){
        var query = 'SELECT * FROM sanpham'
        dbHelper.getRecord(query)
        .then((rows) => {
            res.status(200).json(rows)
        })
    }

    getAllBalo(req, res){
        var query = 'SELECT * FROM sanpham WHERE IDLoaiHang = 1'
        dbHelper.getRecord(query)
        .then((rows) => {
            res.status(200).json(rows)
        })
    }

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

}
module.exports = new SanPhamController;