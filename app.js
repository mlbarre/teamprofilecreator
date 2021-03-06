const inquirer = require('inquirer');
const fs = require('fs');

const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
// const Employee = require('./lib/Employee.js');

const generateTeamPage = require("./src/page-template.js");
// const pageHTML = generateTeamPage();

// Team Array for questions and answers
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
            choices: ["Engineer", "Intern", "Manager"],
        },
    ])
    .then((answers) => {
        if (answers.role === "Manager") {  // * Manager Input 
            const getOfficeNum = () => {
                inquirer
                .prompt([
                    {
                        type: "input",
                        name: "officeNum",
                        message: "What is the building number?"
                    },
                ])
                .then(answers => {
                    const newManager = new Manager(answers.name, answers.id, answers.email, getOfficeNum.officeNum);
                    team.push(newManager);
                    })
                }
        } else if (answers.role === "Engineer") { // * Engineer Input 
            const getGithubInput = () => {
                inquirer
                .prompt ([
                    {
                        type: "input",
                        name: "githubInput",
                        message: "What is your Github username?"
                    },
                ])
                .then(answers => {
                    const newEngineer = new Engineer(answers.name, answers.id, answers.email, getGithubInput.githubInput);
                    team.push(newEngineer);
                })
            }
        } else if (answers.role === "Intern") {
            const getSchool = () => {
                inquirer
                .prompt ([
                    {
                        type: "input",
                        name: "schoolInput",
                        message: "What school do you go to?"
                    },
                ])
                .then(answers => {
                    const newIntern =  new Intern(answers.name, answers.id, answers.email, answers.schoolInput);
                    // newIntern.push(team);
                    newIntern.push(getSchool());
                })
            }
        promptNewEmployee();
        }
    })
};

function promptNewEmployee() {
    const newEmployeeSelection = () => {
        inquirer
        .prompt([
            {
                type: "list",
                name: "newEmployee",
                message: "Are you happy with your team?",
                choices: ['Add a new employee', "This is my team"]
            }
        ])
        .then(answers => {
            if (newEmployeeSelection.newEmployee === "Add a new employee") {
                setUpEmployee();
            } else {
                createTeam();
            }
        })
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
    fs.writeFile('./dist/index.html', setUpEmployee => {
        writeToFile('./dist/index.html', generateTeamPage(answers));
        if (err) throw err;
    
        console.log('Perfect! Check out index.html to see your team!');
    });

};


// fs.writeFile('./dist/index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Perfect! Check out index.html to see your team!');
// });

setUpEmployee();