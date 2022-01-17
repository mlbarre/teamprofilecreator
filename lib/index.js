const inquirer = require('inquirer');
const Manager = require('../Manager.js');
const Intern = require('../Intern.js');
const Engineer = require('../Engineer.js');
const fs = require('fs');

const team = [];

const setUpEmployee = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "list",
            name: "role",
            message: "What is your job role?",
            choice: ["Engineer", "Intern", "Manager"],
        },
    ])
    
    // Manager Input 
    if (answers.role === "Manager") {
        const getOfficeNum =
        inquirer
        .prompt([
            {
                type: "input",
                name: "officeNum",
                message: "What is the building number?"
            },
        ])
        const newManager = new Manager(answers.name, answers.id, answers.email, getOfficeNum.officeNum);
        team.push(newManager);
    } 