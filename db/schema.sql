DROP DATABASE IF EXISTS emp_trackerDB;

CREATE DATABASE emp_trackerDB;

USE emp_trackerDB;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
	id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  dept_id INT NOT NULL,
  foreign key (dept_id) REFERENCES departments(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  foreign key (role_id) REFERENCES roles(id) ON DELETE CASCADE,
  foreign key (manager_id) REFERENCES employees(id),
	PRIMARY KEY (id)
);
