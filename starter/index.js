const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your Project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the project.",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Please provide the table of contents"
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide instructions of installation"
  },
  {
    type: "input",
    name: "usage",
    message:
      "State the languages or technologies associated with this project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
  {
    type: "input",
    name: "questions",
    message: "Write your GitHub username.",
    validate: function (responses) {
        if (responses.length < 1) {
            return console.log("Please type in a valid username: ")
        }
        return true;
    }
  },
  {
    type: "input",
    name: "questions",
    message: "Provide a valid email address.",
   
  },
];

// function to write README file and throws and error if something is wrong and informs the user
function writeToFile(fileName, data) {
    
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses })); //put the generated readme in that folder
      });
}

// function call to initialize program
init();
