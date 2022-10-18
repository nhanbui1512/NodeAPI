const dbHelper = require('./dbHelper')
class LoaiHangController {
    getAllLoaiHang(req , res){
        var query = `select * from loaihang`

        dbHelper.getRecord(query)
            .then( (rows) => {
                return rows
            })
            .then((result) => {
                for (let i = 0; i < result.length; i++) {
                    const element = result[i];
                    if(element.TrangThai == 1 ){
                        result[i].TrangThai = true
                    }
                    else{
                        result[i].TrangThai = false
                    }
                    
                }
                res.status(200).json(result)
            })
    }
}

module.exports = new LoaiHangController