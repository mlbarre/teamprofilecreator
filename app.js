const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
// const Employee = require('./lib/Employee.js');

const generateTeamPage = require("./src/page-template.js");
const pageHTML = generateTeamPage(team);

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
            choices: ["Engineer", "Intern", "Manager"],
        },
    ])
    .then((answers) => {
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

    // Engineer Input 
    } else if (answers.role === "Engineer") {
        const getGithubInput = 
        inquirer
        .prompt ([
            {
                type: "input",
                name: "githubInput",
                message: "What is your Github username?"
            },
        ])
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, getGithubInput.githubInput);
        team.push(newEngineer);

    // Intern Input 
    } else if (answers.role === "Intern") {
        const getSchool =
        inquirer
        .prompt ([
            {
                type: "input",
                name: "schoolInput",
                message: "What school do you go to?"
            },
        ])
        .then(answers => {
            const newIntern =  new Intern(answers.name, answers.id, answers.email, getSchool.schoolInput);
            team.push(newIntern);
        })
        promptNewEmployee();
    }})
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
        setUpEmployee();
    } else {
    createTeam();
    }
};

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Yay!");
//         }
//     })
// }

function createTeam () {
    inquirer.prompt(questions).then(answers => {
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) throw err;
    
        console.log('Perfect! Check out index.html to see your team!');
    });
    });
};


// fs.writeFile('./dist/index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Perfect! Check out index.html to see your team!');
// });
setUpEmployee();