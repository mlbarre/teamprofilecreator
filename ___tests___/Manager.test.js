
const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Jamie', '00000', '3043');

    expect(manager.name).toBe('Jamie');

    expect(manager.id).toBe('00000');

    expect(manager.officeNum).toBe('3043');
})