// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.project}
  
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
