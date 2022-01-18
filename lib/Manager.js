const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;

    }

    getRole() {
        return "Manager";
    }

    getOfficeNum() {
        return this.officeNum;
    }

};

module.exports = Manager;