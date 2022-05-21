const inquirer = require('inquirer');
const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.role = 'Manager'
        this.officeNumber = officeNumber
    }
    getRole() {
        return this.role
    }
};

module.exports = manager;