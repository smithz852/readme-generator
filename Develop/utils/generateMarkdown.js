
let licenseBadge = ''
let licenseLink = ''

//renders license badge
function renderLicenseBadge(license) {
if (license == 'No License') {
  return ' '
} else {
  licenseBadge = `![License Badge](https://img.shields.io/badge/License-${license}-blue)`
  renderLicenseSection(license)
   return licenseBadge
 }
}

// renders license section
function renderLicenseSection(license) {
  if (license == 'No License') {
    return ' '
  } else {
    return `
## License

This application is covered under the following license: ${license}

    `
  }
}

// generates GitHub username if applicable
function generateUser(user) {
 if (user == '') {
  return ''
 } else {
  return `
GitHub: https://github.com/${user}
  `
 }
}

// generates readme file
function generateMarkdown(data) {
  let license = data.license
  let user = data.username
  console.log(data)
  return `# ${data.project} ${renderLicenseBadge(license)}
  
## Table of Contents:
  1. [Description](#description)
  2. [Installations](#installations)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributions](#contributions)
  6. [Tests](#tests)
  7. [Credits](#credits)
  8. [Questions](#questions)

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
${generateUser(user)}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
