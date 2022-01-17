const Employee = require('/Employee.js');

class Manager extends Employee {
    constructor(name, id, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;

    }

}