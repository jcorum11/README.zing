// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.mitLicense ? "MIT" : data.license}
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.githubProfileLInk}
  ${data.emailLink}
`;
}

module.exports = generateMarkdown;
