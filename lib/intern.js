const inquirer = require('inquirer');
const employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.role = 'Intern'
        this.school = school
    }
    getRole() {
        return this.role
    }
    getSchool() {
        return this.school
    }
};

module.exports = intern;