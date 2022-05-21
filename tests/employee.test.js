const Employee = require('../lib/Employee');

const Amy = {
    name: 'Amy'
    id: 1, 
    email: 'amy@testemail.com'
    role: 'Employee'
}

const { name, id, email } = Amy

test('creates a new employee object', () => {
    const employee = new employee('Amy', 1, 'amy@testmail.com')

    expect(employee.name).toBe(name)
    expect(employee.id).toEqual(id)
    expect(employee.email).toBe(email)
    expect(employee.role).toBe('Employee')
})

test('gets the employees name', () => {
    const employee = new Employee(name, id, email)
    
    expect(employee.getName()).toBe(name)
})

test('gets employee id', () => {
    const employee = new Employee(name, id, email)

    expect(employee.getId()).toEqual(id)
})

test('gets employee email address', () => {
    const employee = new Employee(name, id, email)

    expect(employee.getEmail()).toBe(email)
})

test('gets employee role', () => {
    const employee = new Employee(name, id, email)

    expect(employee.getRole()).toBe('Employee')
})