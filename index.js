const fs = require("fs");
const inquirer = require("inquirer");
const { rejects } = require("assert");
const { resolve } = require("path");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
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

const generateTitle = readmeData => readmeData.title

const promptUser = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project title?"
        }
    ])
}

promptUser()
    .then(readmeData => generateTitle(readmeData))
    .then(pageMd => writeFile(pageMd))