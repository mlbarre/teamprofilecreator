const inquirer = require('inquirer');
const Manager = require('../Manager.js');
const Intern = require('../Intern.js');
const Engineer = require('../Engineer.js');
const fs = require('fs');

const team = [];

const setUpManager = () => {
    inquirer
    .prompt([
        {
            type: "input";

        }

    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        team.push(manager);

        promptOptions();
    }
}

const promptOptions = () => {
    inquirer
    .prompt([

    ])
} 