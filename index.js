
// get the needed packages/modules/pages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
// grab the users input through command-line prompts
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions for installation"
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage of this application"
    },
    {
        type: "list",
        name: "license",
        message: "Please select one of the following licenses",
        choices: ["MIT", "Apache", "GNU","Boost Software"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please explain how others may go about contributing to this project"
    },
    {
        type: "input",
        name: "test",
        message: "Please explain how this app can be tested"
    },
    {
        type: "input",
        name: "gitHub",
        message: "Please enter your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    },

]).then(function(response){
// console.log(response);
//link the generateMarkdown file with index.js
var markdown = generateMarkdown(response);
// writeFile to generate the README
fs.writeFile("GOODREADME.md", markdown, (err) =>{
if (err) throw err
console.log("Successfully wrote a file!");
})
})