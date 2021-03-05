// Dependencies
const mysql = require("mysql2");
require("dotenv").config();

// Connection using .env file for privacy
const connection = mysql.createConnection({
	database: process.env.DB_DATABASE,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

module.exports = connection;
