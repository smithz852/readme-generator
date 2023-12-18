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
    type: 'input',
    message: 'How would you describe your project?',
    name: 'description',
   },
   {
    type: 'input',
    message: 'Are there required installations?',
    name: 'installations',
   },
   {
    type: 'input',
    message: 'How is the application used?',
    name: 'usage',
   },
   {
    type: 'checkbox',
    message: 'Which license is used?',
    choices: ['MIT','GNU General Public License v3.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License', 'Boost Software License 1.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v2.1', 'No License'],
    name: 'license',
   },
   {
    type: 'input',
    message: 'How can other developers contribute?',
    name: 'contributors',
   },
   {
    type: 'input',
    message: 'Are there any recommended tests for usage?',
    name: 'tests',
   },
   {
    type: 'input',
    message: 'Please list any contributors, or assets, you would like to give credit to here: ',
    name: 'credits',
   },
   {
    type: 'input',
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
