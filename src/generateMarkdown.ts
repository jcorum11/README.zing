// function to generate markdown for README
const licenseSelector = require('./licenseSelector.js')
function generateMarkdown(data) {
  const licenseSelection = licenseSelector(data.license)
  return `
  # ${data.title}

  ![License](https://img.shields.io/badge/license-${licenseSelection.name}-green)

  ## Description
  ${data.description}

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
  ##### Description
  >${licenseSelection.description}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  [GitHub Profile](${data.githubProfileLink})
  [Email](${data.emailLink})
`;
}

module.exports = generateMarkdown;
