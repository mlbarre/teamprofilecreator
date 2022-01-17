
const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Yulisa', '012298', 'UTSA');

    expect(intern.name).toBe('Yulisa');

    expect(intern.id).toBe('012298');

    expect(intern.schoolInput).toBe('UTSA');
})