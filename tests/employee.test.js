const { hasUncaughtExceptionCaptureCallback } = require('process');
const { TestScheduler } = require('rxjs/testing');
const employee = require('../lib/employee');

test('creates a new employee object', () => {
    const employee = new employee('Amy', 1, 'amy@testmail.com')

    expect(employee.name).toBe('Amy')
    expect(employee.id).toEqual(1)
    expect(employee.email).toBe('amy@testmail.com')
})

test('gets the employees name', () => {
    const employee = new employee('Amy')
    
    expect(employee.getName()).toBe('Amy')
})

test('gets employee id', () => {
    const employee = new employee('Amy')

    expect(employee.getId()).toEqual(1)
})

test('gets employee email address', () => {
    const employee = new employee('Amy')

    expect(employee.getEmail()).toBe('amy@testmail.com')
})

test('gets employee role', () => {
    const employee = new employee('Amy')

    expect(employee.getRole()).toBe('employee')
})