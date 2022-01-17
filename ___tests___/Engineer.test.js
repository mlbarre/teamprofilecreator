const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('John');

    expect(engineer.name).toBe('John');
})