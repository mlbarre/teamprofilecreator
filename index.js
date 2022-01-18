const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('/lib/Intern.js');
const Manager = require('/lib/Manager.js');
const Engineer = require('/lib/Engineer.js');
const Employee = require('/lib/Employee.js');

const generateTeamPage = require("../src/page-template.js");

// Team Array for questions and answers
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
    } else if (questions.role === "Intern") {
        const getSchool =
        inquirer
        .prompt ([
            {
                type: "input",
                name: "schoolInput",
                message: "What school do you go to?"
            },
        ])
        const newIntern =  new Intern(questions.name, questions.id, questions.email, questions.schoolInput);
        team.push(newIntern);
    }
};

function promptNewEmployee() {
    const newEmployeeSelection = 
    inquirer
    .prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "Are you happy with your team?",
            choices: ['Add a new employee', "This is my team"]
        }
    ])
    if (newEmployeeSelection.newEmployee === "Add a new employee") {
        return setUpEmployee();
    }
    return createTeam();
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Yay!");
        }
    })
}
function createTeam () {
    inquirer.prompt(questions).then(function(data) {
    writeToFile("./dist/index.html", generateTeamPage(data));
    })
};