// Dependencies
// const database = require("./db/schema");
const connection = require("./config/connection");
const inquirer = require("inquirer");
require("console.table");

// connection.query("SELECT * FROM table1", (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// 	console.log("TESTING");
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
			switch (answer.firstAction) {
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

mainMenu();

const viewEmployees = async () => {
	try {
		const employees = await connection.query("SELECT * FROM employees");
		console.table(employees);
		mainMenu();
	} catch (err) {
		console.log(err);
	}
};

const viewDepartments = () => {};

const viewRoles = () => {};

const addEmployee = async () => {
	try {
		const roles = await connection.query("SELECT * FROM roles");
		const roleChoices = roles.map(({ id, title }) => ({
			name: title,
			value: id,
		}));
		const managers = await connection.query(
			"SELECT * FROM employees WHERE manager_id is NULL"
		);
		const selectManager = managers.map(({ id, first_name, last_name }) => ({
			name: `${first_name} ${last_name}`,
			value: id,
		}));
		selectManager.push({ name: "none", value: null });
		console.log(managers);
		const newEmployee = await inquirer.prompt([
			{
				name: "first_name",
				type: "input",
				message: "Please type in the new employee's First Name:",
			},
			{
				name: "last_name",
				type: "input",
				message: "Please type in the new employee's Last Name:",
			},
			{
				name: "role_id",
				type: "list",
				message: "Select the role this new employee will have:",
				choices: roleChoices,
			},
			{
				name: "manager_id",
				type: "list",
				message: "Select the Manager this employee reports to:",
				choices: selectManager,
			},
		]);
		await connection.query("INSERT INTO employees SET ?", newEmployee);
		const viewEmps = await connection.query("SELECT * FROM employees");
		console.table(viewEmps);
		mainMenu();
	} catch (err) {
		console.log(err);
	}
};

const addDepartment = () => {};

const addRole = () => {};

const updateRoles = () => {};
