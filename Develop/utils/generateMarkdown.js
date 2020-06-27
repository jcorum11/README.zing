// function to generate markdown for README
const licenseSelector = require("./licenseSelector.js")
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
  ${licenseSelector(data.license)}
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.githubProfileLink}
  ${data.emailLink}
`;
};

module.exports = generateMarkdown;
