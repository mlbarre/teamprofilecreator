const inquirer = require('inquirer');
const generateTeamPage = require('./src/page-template.js');
const { writefile, copyFile } = require('./utils/generateSite.js');

const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee id.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'roleInput',
            message: 'What is your job role?',
            choices: ['Engineer', 'Intern', 'Manager'],
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the building number?',
            when: ({ Manager }) => roleInput
        }
    ])
}

