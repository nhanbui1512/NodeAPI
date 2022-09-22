const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_courses'
});
con.connect();



module.exports.getRecord = function(query){
    return new Promise(function(resolve, reject) {
        query_str = query
        con.query(query_str, function (err, rows, fields) {
            if (err) throw err;
            resolve(rows);
        });
    });
}

