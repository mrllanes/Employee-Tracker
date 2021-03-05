// Dependencies
// const database = require("./db/schema");
const connection = require("./config/connection");
const inquirer = require("inquirer");

// connection.query("SELECT * FROM table1", (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// 	console.log("TESTING");
// });

// connection.connect((err) => {
// 	if (err) throw err;
// 	console.log(`connected as id ${connection.threadId}`);
// 	// mainMenu();
// });

const mainMenu = () => {
	inquirer
		.prompt({
			name: "firstAction",
			type: "rawlist",
			message: "Please make a selection below",
			choices: [
				"View all Employees",
				"View all Departments",
				"View all roles",
				"Add an Employee",
				"Add a Department",
				"Add a role",
				"Update Employee Roles",
				"Exit Program",
			],
		})
		.then((answer) => {
			switch (answer.action) {
				case "View all Employees":
					viewEmployees();
					break;

				case "View all Departments":
					viewDepartments();
					break;

				case "View all roles":
					viewRoles();
					break;

				case "Add an Employee":
					addEmployee();
					break;

				case "Add a Department":
					addDepartment();
					break;

				case "Add a role":
					addRole();
					break;

				case "Update Employee Roles":
					updateRoles();
					break;

				case "Exit Program":
					connection.end();
					break;

				default:
					console.log(`Invalid action: ${answer.action}`);
					break;
			}
		});
};

const viewEmployees = () => {};

const viewDepartments = () => {};

const viewRoles = () => {};

const addEmployee = () => {};

const addDepartment = () => {};

const addRole = () => {};

const updateRoles = () => {};
