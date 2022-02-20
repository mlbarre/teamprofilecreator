const inquirer = require('inquirer');
const generateTeamPage = require('./src/page-template.js');
const { writefile, copyFile } = require('./utils/generateSite.js');

const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        }
    ])
}

