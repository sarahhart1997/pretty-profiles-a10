const Employee = require('../lib/Employee');
var test = 'Employee';
const Amy = {
    name: 'Amy',
    id: 1, 
    email: 'amy@testemail.com',
    role: 'Employee'
}

const { name, id, email, role} = Amy

test('creates a new employee object', () => {
    const employee = new Employee(name, id, email, role)
console.log(employee)
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