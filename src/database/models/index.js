import mysql from 'mysql';
import dbConfig from '../config/index.js'


// Creating a connection to the database
const sql = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
sql.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

export default sql;