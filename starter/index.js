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
    name: "Table of contents",
    message: "Please provide the table of contents"
  },
  {
    type: "input",
    name: "Installation",
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
    name: "Questions",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "Questions",
    message: "Provide a valid email address.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  
}

// function to initialize program
function init() {
 
}

// function call to initialize program
init();
