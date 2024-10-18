const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'vehicle_ads'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL DB');
});

module.exports = db;
