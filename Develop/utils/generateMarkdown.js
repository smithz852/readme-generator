
let licenseBadge = ''
let licenseLink = ''

//Give brief credit to shield io
function renderLicenseBadge(license) {
if (license === '') {
  licenseBadge = ``
  return
} else {
  licenseBadge = `https://img.shields.io/badge/License-${license}-blue`
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

  if (license === '') {
    return ''
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
  return `# ${data.project} ![License Badge](${renderLicenseBadge(license)})
  
## Table of Contents:
  1. Description
  2. Installations
  3. Usage
  4. License
  5. Contributions
  6. Tests
  7. Questions

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

## Questions

${data.questions}

`;
}

module.exports = generateMarkdown;
