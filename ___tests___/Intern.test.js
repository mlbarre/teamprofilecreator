
const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Yulisa');

    expect(intern.name).toBe('Yulisa');
})