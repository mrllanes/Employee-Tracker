USE emp_trackerDB;

INSERT INTO departments (name)
VALUES ("Information Technology"), ("Finance"), ("Customer Service"), ("Sales");

INSERT INTO roles (title, salary, dept_id)
VALUES ("IT Manager", 70000.00, 1), ("Finance Manager", 80000.00, 2), ("CS Manager", 60000.00, 3), ("Sales Manager", 65000.00, 4);
INSERT INTO roles (title, salary, dept_id)
VALUES ("IT Specialist", 61000.00, 1), ("Finance Specialist", 65000.00, 2), ("CS Specialist", 48000.00, 3), ("Sales Specialist", 45000.00, 4);
INSERT INTO roles (title, salary, dept_id)
VALUES ("IT Associate", 50000.42, 1), ("Finance Associate", 55000.99, 2), ("CS Associate", 40000.07, 3), ("Sales Associate", 39000.01, 4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Morgan", "Freeman", 1), ("Tom", "Hanks", 2), ("Samuel", "Jackson", 3), ("Julia", "Roberts", 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Hakeem", "Olajuwon", 5, 1), ("James", "Hardin", 5, 1), ("Mia", "Hamm", 9, 1), ("Warren", "Moon", 9, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jennifer", "Aniston", 6, 2), ("Salma", "Hayak", 6, 2), ("Amanda", "Peet", 10, 2), ("Mara", "Rooney", 10, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Nikki", "Glaser", 7, 3), ("Bill", "Burr", 7, 3), ("Maria", "Bamford", 11, 3), ("Jeff", "Ross", 11, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Fleur", "Delacour", 8, 4), ("Nymphadora", "Tonks", 8, 4), ("Kingsley", "Shacklebolt", 12, 4), ("Stan", "Shunpike", 12, 4);

