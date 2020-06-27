// function to generate markdown for README
const licenseSelector = require("./licenseSelector.js")
function generateMarkdown(data) {
  licenseSelection = licenseSelector(data.license)
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
  ${licenseSelection.link}
  ### Description
  >${licenseSelection.description}

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
