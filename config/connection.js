// Dependencies
const mysql = require("mysql2");
require("dotenv").config();

// Connection using .env file for privacy
const connection = mysql.createConnection({
	database: `${process.env.DATABASE}`,
	host: `${process.env.HOST}`,
	port: `${process.env.PORT}`,
	user: `${process.env.USER}`,
	password: `${process.env.PASSWORD}`,
});

module.exports = connection;
