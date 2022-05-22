const fs = require('fs')
const inquirer = require('inquirer')

//Load in pages
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

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