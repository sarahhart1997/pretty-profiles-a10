const { hasUncaughtExceptionCaptureCallback } = require('process');
const { TestScheduler } = require('rxjs/testing');
const Manager = require('../lib/Manager');

const tori = {
    name: 'Tori',
    id: 4,
    email: 'tori@testemail.com',
    role: 'Manager', 
    officeNumber: '8'
}

const { name, id, email, officeNumber } = tori

test('gets manager name', () => {
    const manager = new Manager(name, id, email, officeNumber)
    
    expect(manager.getName()).toBe(name)
})

test('gets manager id', () => {
    const manager = new Manager(name, id, email, officeNumber)

    expect(manager.getId()).toEqual(id)
})

test('gets manager email address', () => {
    const manager = new Manager(name, id, email, officeNumber)

    expect(manager.getEmail()).toBe(email)
})

test('gets role', () => {
    const manager = new Manager(name, id, email, officeNumber)

    expect(manager.getRole()).toBe('Manager')
})