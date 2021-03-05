USE emp_trackerDB;

INSERT INTO departments (name)
VALUES ("Information Technology"), ("Finance"), ("Customer Service"), ("Sales");

INSERT INTO role (title, salary, dept_id)
VALUES ("Manager", 70000.00, 1), ("Manager", 80000.00, 2), ("Manager", 60000.00, 3), ("Manager", 65000.00, 4);
INSERT INTO role (title, salary, dept_id)
VALUES ("Specialist", 61000.00, 1), ("Specialist", 65000.00, 2), ("Specialist", 48000.00, 3), ("Specialist", 45000.00, 4);
INSERT INTO role (title, salary, dept_id)
VALUES ("Associate", 50000.42, 1), ("Associate", 55000.99, 2), ("Associate", 40000.07, 3), ("Associate", 39000.01, 4);

INSERT INTO manager (first_name, last_name)
VALUES ("Morgan", "Freeman"), ("Bill", "Pullman"), ("Samuel", "Jackson"), ("Julia", "Roberts");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Frost", 5, 1), ("James", "Hardin", 5, 1), ("Florence", "Johnson", 9, 1), ("Bobby", "Jones", 9, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jennifer", "Aniston", 6, 2), ("Salma", "Hayak", 6, 2), ("Amanda", "Peet", 10, 2), ("Micky", "Rooney", 10, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Rodney", "Dangerfield", 7, 3), ("Bill", "Burr", 7, 3), ("Maria", "Bamford", 11, 3), ("Jeff", "Ross", 11, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Molly", "Weasley", 8, 4), ("Hermione", "Granger", 8, 4), ("Kingsley", "Shacklebolt", 12, 4), ("Stan", "Shunpike", 12, 4);

