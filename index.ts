const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./src/generateMarkdown.js')

// function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err)
        return
      }
      resolve({
        ok: true,
        message: 'File created!!'
      })
    })
  })
}

// function to start program
const init = () => {
  // list of licenses
  const licenseList = [
    'GNU AGPLv3',
    'GNU GPLv3',
    'GNU LGPLv3',
    'Mozilla Public License 2.0',
    'Apache License 2.0',
    'MIT License',
    'Boost Software License 1.0',
    'The Unlicense'
  ]
  // array of questions for user
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Project title:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description of the project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Instructions for Installation:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Instructions for Usage:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'License?',
      choices: licenseList
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Instructions For Contributing:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Type of Test:'
    },
    {
      type: 'input',
      name: 'githubProfileLink',
      message: 'Enter Your GitHub Profile Link:'
    },
    {
      type: 'input',
      name: 'emailLink',
      message: 'Enter Your Email:'
    }
  ])
}

//function call to initialize program
init()
  .then(readmeData => generateMarkdown(readmeData))
  .then(pageMd => writeFile(pageMd))


