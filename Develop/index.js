// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
inquirer
 .prompt([
   {
    type: 'input',
    message: 'What is the project name?',
    name: 'project',
   },
   {
    input: 'input',
    message: 'Are there required installations?',
    name: 'installations',
   },
   {
    input: 'input',
    message: 'How is the application used?',
    name: 'usage',
   },
   {
    input: 'input',
    message: 'Which license is used?',
    name: 'license',
   },
   {
    input: 'input',
    message: 'Who are the contributors?',
    name: 'contributors',
   },
   {
    input: 'input',
    message: 'Are there any recommended tests for usage?',
    name: 'tests',
   },
   {
    input: 'input',
    message: 'Where should questions be directed?',
    name: 'questions',
   },

])
 .then((data) =>
  fs.writeFile('README.md', generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('README has been created!')
  ));

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
