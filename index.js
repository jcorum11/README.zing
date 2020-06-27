const fs = require("fs");
const inquirer = require("inquirer");
const { rejects } = require("assert");
const { resolve } = require("path");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js")

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created!!"
            })
        })
    })
}

// function to start program
const init = () => {
    // array of questions for user
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project title?"
        }
    ])
}

//function call to initialize program
init()
    .then(readmeData => generateMarkdown(readmeData))
    .then(pageMd => writeFile(pageMd))


