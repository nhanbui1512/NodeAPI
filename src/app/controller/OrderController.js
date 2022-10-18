
const dbHelper = require('./dbHelper')
class OrderController {
    getAllOrder(req , res){
        var query = `select * from orders`

        dbHelper.getRecord(query)
            .then( (rows) => {
                return rows
            })
            .then((result) => {
                res.status(200).json(result)
            })
    }
}

module.exports = new OrderController