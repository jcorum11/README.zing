"use strict";
exports.__esModule = true;
// function to generate markdown for README
var licenseSelector = require('./licenseSelector.ts');
function generateMarkdown(data) {
    var licenseSelection = licenseSelector(data.license);
    return "\n  # ".concat(data.title, "\n\n  ![License](https://img.shields.io/badge/license-").concat(licenseSelection.name, "-green)\n\n  ## Description\n  ").concat(data.description, "\n\n  ## Table of Contents\n  * [Installation](#installation)\n  * [Usage](#usage)\n  * [Credits](#credits)\n  * [License](#license)\n\n  ## Installation\n  ").concat(data.installation, "\n\n  ## Usage\n  ").concat(data.usage, "\n\n  ## License\n  ").concat(licenseSelection.link, "\n  ##### Description\n  >").concat(licenseSelection.description, "\n\n  ## Contributing\n  ").concat(data.contributing, "\n\n  ## Tests\n  ").concat(data.tests, "\n\n  ## Questions\n  [GitHub Profile](").concat(data.githubProfileLink, ")\n  [Email](").concat(data.emailLink, ")\n");
}
module.exports = generateMarkdown;
