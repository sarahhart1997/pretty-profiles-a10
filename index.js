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

function runCode(employeeType) {
    return inquirer.prompt(employeeType).then(response => {
        var role = data.role
        if (role === 'Employee') {
            return runEmployee()
        } 
        if (role === 'Engineer') {
            return runEngineer()
        } 
        if (role === 'Intern') {
            return runIntern()
        } 
        if (role === 'Manager') {
            // return runManager().then(response => {
                
            // })
        }
    })
}

runCode ();