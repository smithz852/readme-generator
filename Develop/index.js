// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
 .prompt([
   {
    input: 'input',
    question: 'What is the project name?',
    message: 'Enter Info:',
   },
   {
    input: 'user input',
    question: 'Are there required installations?',
    prompt: 'Enter Info:',
   },
   {
    input: 'user input',
    question: 'How is the application used?',
    message: 'Enter Info:',
   },
   {
    input: 'user input',
    question: 'What license is used?',
    message: 'Enter Info:',
   },
   {
    input: 'user input',
    question: 'Who are the contributors?',
    message: 'Enter Info:',
   },
   {
    input: 'user input',
    question: 'What tests were performed?',
    message: 'Enter Info:',
   },
   {
    input: 'user input',
    question: 'Are there any questions you would like to list?',
    message: 'Enter Info:',
   },

])
 .then((data) =>
  fs.writeFile('README.md', stringify(data), (err) =>
  err ? console.error(err) : console.log('README has been created!')
  ));

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
