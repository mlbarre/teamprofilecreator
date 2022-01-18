
const Engineer = require('../lib/Engineer.js');
const Employee = require('../lib/Employee');

test('creates an engineer object', () => {
    const engineer = new Engineer('John', '09876', 'johngithub');

    expect(engineer.name).toBe('John');

    expect(engineer.id).toBe('09876');

    expect(engineer.githubInput).toBe('johngithub');
})