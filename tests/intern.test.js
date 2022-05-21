const Intern = require('../lib/Intern');

const natalie = {
    name: 'Natalie',
    id: 6,
    email: 'natalie@testemail.com',
    role: 'Intern', 
    school: 'Liberty University'
}

const { name, id, email, school } = natalie

test('intern created', () => {
    const intern = new Intern(name, id, email, school)

    expect(intern.name).toBe(name)
    expect(intern.id).toEqual(id)
    expect(intern.email).toBe(email)
    expect(intern.role).toBe('Intern')
    expect(intern.school).toBe(school)
})

test('gets intern name', () => {
    const intern = new Intern(name, id, email, school)

    expect(intern.getName()).toBe(name)
})

test('gets intern id', () => {
    const intern = new Intern(name, id, email, school)

    expect(intern.getId()).toEqual(id)
})

test('gets intern email address', () => {
    const intern = new Intern(name, id, email, school)

    expect(intern.getEmail()).toBe(email)
})

test('gets role', () => {
    const intern = new Intern(name, id, email, school)

    expect(intern.getRole()).toBe('Intern')
})

test('gets school name', () => {
    const intern = new Intern(name, id, email, school)

    expect(intern.getSchool()).toBe(school)
})