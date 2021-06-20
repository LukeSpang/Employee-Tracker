const mysql = require('mysql');
const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');

const connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});

connection.connect(function(err){
    if(err) throw err;
    start();
});

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update employee role",
                "Exit"
            ]
        })
        .then(function(answer){
            if(answer.action === "View all departments"){
                viewDepartments();
            } else if (answer.action === "View all roles"){
                viewRoles();
            } else if (answer.action === "View all employees"){
                viewEmployees();
            } else if (answer.action === "Add a department"){
                addDepartment();
            } else if (answer.action === "Add a role"){
                addRole();
            } else if (answer.action === "Add an employee"){
                addEmployee();
            } else if (answer.action === "Update employee role"){
                updateRole();
            } else if (answer.action === "Exit"){
                connection.end();
            }
        })
}

function viewDepartments(){
    const query = "SELECT * FROM department";
        connection.query(query, function(err, res){
            console.log(`DEPARTMENTS:`)
            res.forEach(department => {
                console.log(`ID: ${department.id} | Name: ${department.name}`)
            })
            start();
        });
};

function viewRoles(){
    const query = "SELECT * FROM role";
        connection.query(query, function(err, res){
            console.log(`ROLES:`)
            res.forEach(role => {
                console.log(`ID: ${role.id} | Title: ${role.title} | Salary: ${role.salary} | Department ID: ${role.department_id}`);
            })
            start();
        });
};

function viewEmployees(){
    const query = "SELECT * FROM employee";
        connection.query(query, function(err, res){
            console.log(`EMPLOYEES:`)
            res.forEach(employee => {
                console.log(`ID: ${employee.id} | Name: ${employee.first_name} ${employee.last_name} | Role ID: ${employee.last_name} | Manager ID: ${employee.manager_id}`);
            })
            start();
        });
};

function addDepartment(){
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "What is the name of the new department?",
        })
        .then(function(answer){
            const query = "INSERT INTO department (name) VALUES ( ? )";
            connection.query(query, answer.department, function(err, res){
                console.log(`You have added: ${(answer.deaprtment).toUpperCase()}.`)
            })
            viewDepartments();
        })
}

function addRole(){
    connection.query("SELECT * FROM department", function(err, res){
        if(err) throw (err);
        inquirer
        .prompt([{
            name: "title",
            type: "input",
            message: "What is the title of the new role?",
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the new role?",
        },
        {
            name: "departmentName",
            type: "list",
            message: "Which department does this role fall into?",
            choices: function() {
                const choicesArray = [];
                res.forEach(res => {
                    choicesArray.push(
                        res.name
                    );
                })
                return choicesArray;
            }
        }
    ])
    })
}