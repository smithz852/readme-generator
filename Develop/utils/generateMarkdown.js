
let licenseBadge = ''
let licenseLink = ''

//Give brief credit to shield io
function renderLicenseBadge(license) {
if (license == 'No License' || ' ') {
  return ' '
} else {
  licenseBadge = `![License Badge](https://img.shields.io/badge/License-${license}-blue)`
  renderLicenseSection(license)
   return licenseBadge
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//  licenseLink =  ''

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license == 'No License' || ' ') {
    return ' '
  } else {
    return `
## License

This application is covered under the following license: ${license}

    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license
  console.log(data)
  return `# ${data.project} ${renderLicenseBadge(license)}
  
## Table of Contents:
  1. [Description](#-description)
  2. [Installations](#-installations)
  3. [Usage](#-usage)
  4. [License](#-license)
  5. [Contributions](#-contributions)
  6. [Tests](#-tests)
  7. [Credits](#-credits)
  8. [Questions](#-questions)

## Description

${data.description}

## Installations

${data.installations}

## Usage

${data.usage}
${renderLicenseSection(license)}
## Contributions

${data.contributors}

## Tests

${data.tests}

## Credits

${data.credits}

## Questions

https://github.com/${data.username}

${data.email}

`;
}

module.exports = generateMarkdown;
