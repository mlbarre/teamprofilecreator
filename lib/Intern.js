const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, schoolInput) {
        super(name, id, email);

    this.schoolInput = schoolInput;
    }
    getRole() {
    return "Intern";
    }

    getSchool() {
        return this.schoolInput;
    }

};

module.exports = Intern;