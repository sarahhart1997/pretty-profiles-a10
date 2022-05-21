const { hasUncaughtExceptionCaptureCallback } = require('process');
const { TestScheduler } = require('rxjs/testing');
const employee = require('../lib/employee');

const Amy = {
    name: 'Amy'
    id: 1, 
    email: 'amy@testemail.com'
}

const { name, id, email } = Amy

test('creates a new employee object', () => {
    const employee = new employee('Amy', 1, 'amy@testmail.com')

    expect(employee.name).toBe(name)
    expect(employee.id).toEqual(id)
    expect(employee.email).toBe(email)
    expect(employee.role).toBe('employee')
})

test('gets the employees name', () => {
    const employee = new employee(name)
    
    expect(employee.getName()).toBe(Amy)
})

test('gets employee id', () => {
    const employee = new employee(Amy)

    expect(employee.getId()).toEqual(id)
})

test('gets employee email address', () => {
    const employee = new employee(Amy)

    expect(employee.getEmail()).toBe(email)
})

test('gets employee role', () => {
    const employee = new employee(Amy)

    expect(employee.getRole()).toBe('employee')
})