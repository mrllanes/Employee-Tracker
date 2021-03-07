// Dependencies
// const database = require("./db/schema");
const connection = require("./config/connection");
const inquirer = require("inquirer");
require("console.table");

// Main function when the program is launched. Asks the initial question
const mainMenu = () => {
	inquirer
		.prompt({
			name: "firstAction",
			type: "rawlist",
			message: "Please make a selection below",
			choices: [
				"View all Employees",
				"View all Departments",
				"View all Roles",
				"Add an Employee",
				"Add a Department",
				"Add a Role",
				"Update Employee Roles",
				"Exit Program",
			],
		})
		.then((answer) => {
			// Each answer from above will be directed to the proper function below
			switch (answer.firstAction) {
				case "View all Employees":
					viewEmployees();
					break;

				case "View all Departments":
					viewDepartments();
					break;

				case "View all Roles":
					viewRoles();
					break;

				case "Add an Employee":
					addEmployee();
					break;

				case "Add a Department":
					addDepartment();
					break;

				case "Add a Role":
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

// Initial calling of the Main Function
mainMenu();

// Below are all the functions that go with the mainMenu selections
const viewEmployees = async () => {
	try {
		const employees = await connection.query("SELECT * FROM employees");
		console.table(employees);
		mainMenu();
	} catch (err) {
		console.log(err);
	}
};

const viewDepartments = async () => {
	try {
		const departments = await connection.query("SELECT * FROM departments");
		console.table(departments);
		mainMenu();
	} catch (err) {
		console.log(err);
	}
};

const viewRoles = async () => {
	try {
		const roles = await connection.query("SELECT * FROM roles");
		console.table(roles);
		mainMenu();
	} catch (err) {
		console.log(err);
	}
};

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
		// console.log(managers);
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

const addDepartment = async () => {
	try {
		// const departments = await connection.query("SELECT * FROM departments");
		const newDept = await inquirer.prompt([
			{
				name: "name",
				type: "input",
				message: "Please type in the Name of the New Department:",
			},
		]);
		await connection.query("INSERT INTO departments SET ?", newDept);
		const viewDepts = await connection.query("SELECT * FROM departments");
		console.table(viewDepts);
		mainMenu();
	} catch (err) {
		console.log(err);
	}
};

const addRole = async () => {
	try {
		const departments = await connection.query("SELECT * FROM departments");
		const deptChoices = departments.map(({ id, name }) => ({
			name: name,
			value: id,
		}));
		const newRole = await inquirer.prompt([
			{
				name: "title",
				type: "input",
				message: "Please type in the Title for the New Role:",
			},
			{
				name: "dept_id",
				type: "list",
				message: "In which Department will this role exist:",
				choices: deptChoices,
			},
			{
				name: "salary",
				type: "input",
				message: "Enter the salary for this new Role:",
			},
		]);
		await connection.query("INSERT INTO roles SET ?", newRole);
		const viewRoles = await connection.query("SELECT * FROM roles");
		console.table(viewRoles);
		mainMenu();
	} catch (err) {
		console.log(err);
	}
};

const updateRoles = async () => {
	try {
		const employees = await connection.query("SELECT * FROM employees");
		const selectEmployee = employees.map(
			({ id, first_name, last_name }) => ({
				name: `${first_name} ${last_name}`,
				value: id,
			})
		);
		const roles = await connection.query("SELECT * FROM roles");
		const roleChoices = roles.map(({ id, title }) => ({
			name: title,
			value: id,
		}));
		const changeRole = await inquirer.prompt([
			{
				name: "id",
				type: "list",
				message: "Please select the Employee who's Role will change:",
				choices: selectEmployee,
			},
			{
				name: "role_id",
				type: "list",
				message: "Select the new role this employee will have:",
				choices: roleChoices,
			},
		]);
	} catch (err) {
		console.log(err);
	}
};
