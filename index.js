const fs = require("fs");
const inquirer = require("inquirer");

const promptUser = () => {
    inquirer.prompt([
        {
            type: "input", 
            name: "name", 
            message: "Project name?"
        }
    ])
}