const inquirer = require('inquirer');
const Manager = require('../Manager.js');
const Intern = require('../Intern.js');
const Engineer = require('../Engineer.js');
const fs = require('fs');

const team = [];

const setUpEmployee = () => {
    const questions = 
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
    if (questions.role === "Manager") {
        const getOfficeNum =
        inquirer
        .prompt([
            {
                type: "input",
                name: "officeNum",
                message: "What is the building number?"
            },
        ])
        const newManager = new Manager(questions.name, questions.id, questions.email, getOfficeNum.officeNum);
        team.push(newManager);

    // Engineer Input 
    } else if (questions.role === "Engineer") {
        const getGithubInput = 
        inquirer
        .prompt ([
            {
                type: "input",
                name: "githubInput",
                message: "What is your Github username?"
            },
        ])
        const newEngineer = new Engineer(questions.name, questions.id, questions.email, getGithubInput.githubInput);
        team.push(newEngineer);

    // Intern Input 
    }