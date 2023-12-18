
let licenseBadge = ''

//Give brief credit to shield io
function renderLicenseBadge(license) {
if (license === '') {
  licenseBadge = ``
  return licenseBadge
} else {
  licenseBadge = `https://img.shields.io/badge/License-${license}-blue`
   return licenseBadge
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license
  console.log(data)
  return `# ${data.project} ${renderLicenseBadge(license)}
  
# Table of Contents:
  1. Installations
  2. Usage
  3. License
  4. Contributions
  5. Tests
  6. Questions

# Installations

${data.installations}

# Usage

${data.usage}

# License

${data.license} 

# Contributions

${data.contributors}

# Tests

${data.tests}

# Questions

${data.questions}

`;
}

module.exports = generateMarkdown;
