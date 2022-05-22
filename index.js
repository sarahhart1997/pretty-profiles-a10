const fs = require('fs')
const inquirer = require('inquirer')

//Load in pages
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

// Inquirer Prompts Defined
const runEmployee = () => inquirer.prompt(employeeQuestions);
const runEngineer = () => inquirer.prompt(engineerQuestions);
const runIntern = () => inquirer.prompt(internQuestions);
const runManager = () => inquirer.prompt(managerQuestions);

function runCode() {
    return inquirer.prompt(employeeType).then(response => {
        if (choices === 'Employee') {
            return runEmployee().then(response => {

            })
        } else if (choices === 'Engineer') {
            return runEngineer().then(response => {

            })
        } else if (choices === 'Intern') {
            return runIntern().then(response => {

            })
        } else if (choices === 'Manager') {
            return runManager().then(response => {
                
            })
        }
    })
}
const employeeType = [
    {
    type: 'list', 
    name: 'role',
    message: 'Which role will your employee hold?', 
    choices: ['Employee', 'Engineer', 'Intern', 'Manager']
    },
]
const employeeQuestions = [
    {
        type: 'input', 
        message: 'Employee\'s name:',
        name: 'name'
    }, 
    {
        type: 'input', 
        message: 'Employee\'s id:', 
        name: 'id', 
    }, 
    {
        type: 'input', 
        message: 'Employee\'s E-mail:',
        name: 'email', 
    }, 
]

const engineerQuestions = [
    {
        type: 'input', 
        message: 'Engineer\'s Name:', 
        name: 'name'
    }, 
    {
        type: 'input', 
        message: 'Engineer\'s ID', 
        name: 'id', 
    }, 
    {
        type: 'input', 
        message: 'Engineer\'s E-mail:', 
        name: 'email',
    },
    {
        type: 'input', 
        message: 'Engineer\'s GitHub id:', 
        name: 'github', 
    }
]

const internQuestions = [
    {
        type: 'input', 
        message: 'Intern\'s Name:', 
        name: 'name'
    }, 
    {
        type: 'input', 
        message: 'Intern\'s ID', 
        name: 'id', 
    }, 
    {
        type: 'input', 
        message: 'Intern\'s E-mail:', 
        name: 'email',
    },
    {
        type: 'input', 
        message: 'Intern\'s School:', 
        name: 'school', 
    }
]

const managerQuestions = [
    {
        type: 'input', 
        message: 'Manager\'s Name:', 
        name: 'name'
    }, 
    {
        type: 'input', 
        message: 'Manager\'s ID', 
        name: 'id', 
    }, 
    {
        type: 'input', 
        message: 'Manager\'s E-mail:', 
        name: 'email',
    },
    {
        type: 'input', 
        message: 'Manager\'s Office Number:', 
        name: 'officeNumber', 
    }
]

const addEmployee = () => {
    return inquirer.prompt(employeeQuestions)
}

const addEngineer = () => {
    return inquirer.prompt(engineerQuestions)
}

const addIntern = () => {
    return inquirer.prompt(internQuestions)
}

const addManager = () => {
    return inquirer.prompt(managerQuestions)
}

runCode ();