const mysql = require ('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    database : 'mydb',
    user : "mydb",
    password : "mydb"
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        process.exit(1);
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
