// Dependencies
const mysql = require("mysql2");
require("dotenv").config();

// Connection using .env file for privacy
const connection = mysql.createConnection({
	database: process.env.database,
	host: process.env.host,
	port: process.env.port,
	user: process.env.user,
	password: process.env.password,
});

module.exports = connection;
