const dbHelper = require('./dbHelper')

class AccountController {
    getAllAccount(req, res){
        var query = `select * from user`
    
        dbHelper.getRecord(query)
            .then((rows) => {
                return rows;
            } )
            .then(rows => {

                for (let i = 0; i < rows.length; i++) {
                    if(rows[i].gender == 1 ){
                        rows[i].gender = 'Nam'
                    }
                    else{
                        rows[i].gender = 'Nữ'
                    }

                    if(rows[i].permission == 1) {
                        rows[i].permission = 'admin'
                    }
                    else{
                        rows[i].permission = 'staff'
                    }
                }
                res.status(200).json(rows)
            })

            .catch(err => {
                res.send(err)
            })

    }
}

module.exports = new AccountController