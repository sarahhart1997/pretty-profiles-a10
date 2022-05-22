const Engineer = require('../lib/Engineer');

const tom = {
    name: 'Tom', 
    id: 2, 
    email: 'tom@testemail.com',
    role: 'Engineer',
    github: 'tomexample'
}

const {name, id, email, github} = tom

test('creates engineer object', () => {
    const engineer = new Engineer(name, id, email, github)

    expect(engineer.name).toBe(name)
    expect(engineer.id).toEqual(id)
    expect(engineer.email).toBe(email)
    expect(engineer.role).toBe('Engineer')
    expect(engineer.github).toBe(github)
})

test('gets engineer name', () => {
    const engineer = new Engineer(name, id, email, github)

    expect(engineer.getName()).toBe(name)
})

test('gets engineer id', () => {
    const engineer = new Engineer(name, id, email, github)

    expect(engineer.getId()).toEqual(id)
})

test('gets engineer email', () => {
    const engineer = new Engineer(name, id, email, github)

    expect(engineer.getEmail()).toBe(email)
})

test('gets role', () => {
    const engineer = new Engineer(name, id, email, github)

    expect(engineer.getRole()).toBe('Engineer')
})

test('gets github id', () => {
    const engineer = new Engineer(name, id, email, github)

    expect(engineer.getGithub()).toBe(github)
})

