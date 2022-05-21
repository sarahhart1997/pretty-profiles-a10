const inquirer = require('inquirer');
const employee = require('./employee');

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email)

        this.role = 'engineer'
        this.github = github
    }
    getRole() {
        return this.role
    }
    gitGithub() {
        return this.github
    }
}

module.exports = engineer