USE employee_db;

INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Information Technology");
INSERT INTO department (name) VALUES ("Corporate");

INSERT INTO role (title, salary, department_id) VALUES ("Analyst", 70, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Communication Associate", 45, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Social Media Manager", 50, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 90, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 95, 4);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Luke", "Spang", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("David", "Smith", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Katie", "Long", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Julie", "Rodgers", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Kevin", "Nero", 5);
