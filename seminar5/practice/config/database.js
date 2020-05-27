const mysql = require('promise-mysql');

const dbconfig = {
    host: 'ds-our-sopt.corhws1nxyif.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'cnd961217',
    databse: 'test'
}

module.exports = mysql.createPool(dbconfig);