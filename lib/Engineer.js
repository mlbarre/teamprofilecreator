const Employee = require('/Employee.js');

class Engineer extends Employee {
    constructor(name, id, githubInput) {
        super(name, id, email);

        this.githubInput = githubInput;
    }
getRole() {
    return "Engineer"; 

}

getGithubInput() {
    return this.githubInput;
}

}