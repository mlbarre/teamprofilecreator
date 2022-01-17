const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Larry', '12345', 'email@website.com');

    expect(employee.name).toBe('Larry');

    expect(employee.id).toBe('12345');

    expect(employee.email).toBe('email@website.com');

})