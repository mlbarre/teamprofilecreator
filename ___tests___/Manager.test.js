
const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Jamie');

    expect(manager.name).toBe('Jamie');
})