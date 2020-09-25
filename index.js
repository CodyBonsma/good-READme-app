// download packages (inquirer, fs)

// capture user input using inquirer

// create a readme file that populates the captured input 

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

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
var markdown = generateMarkdown(response);

fs.writeFile("GOODREADME.md", markdown, (err) =>{
if (err) throw err
console.log("Successfully wrote a file!");
})
})