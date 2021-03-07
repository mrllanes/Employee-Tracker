// Dependencies
const mysql = require("mysql2");
const util = require("util");
require("dotenv").config();

// Connection using .env file for privacy
const connection = mysql.createConnection({
	database: process.env.DB_DATABASE,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

connection.connect();
// Using util to use promises, allows us to use async/await
connection.query = util.promisify(connection.query);

module.exports = connection;
