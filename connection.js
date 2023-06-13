const mysql = require('mysql');

var connection = mysql.createConnection( {
  host: 'localhost',
  database: 'fake_database',
  user: 'root',
  password: '123456'

})


connection.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('MySQL Database is connected successfully');
    }
});

module.exports = connection;