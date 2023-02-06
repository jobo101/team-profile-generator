const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const staffMemberData = [];

const questions = async () => {
    const answers = await inquirer
    .prompt ([
        {
            type: "input",
            message: "Enter your full name.",
            name: "name",

        },
        {
            type: "input",
            message: "Enter your ID number.",
            name: "id",
        },
        {
            type: "input",
            message: "Enter your email address.",
            name: "email",            
        },
        {
            type: "input",
            message: "Enter your role.",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"],
        },


    ])

}
if (answers.role === "Manager") {
    const managerAnswer = await inquirer
    .prompt([
        {
            type: "input",
            message: "Enter your office number.",
            name: "officeNumber",
        }
    ])
    const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        managerAnswer.officeNumber
    );
    staffMemberData.push(newManager);
}
else if (answers.role === "Engineer") {
    const githubAnswer = await inquirer
    .prompt([
            {
            type: "input",
            message:"Enter your github id",
            name: "github",

            }
        ])
        const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        githubAnswer.github
        );
        staffMemberData.push(newEngineer)
}
 else if (answers.role == "Intern") {
    const internAnswer = await inquirer
    .prompt([
        {
            type: "input",
            message: "Enter the name of your university",
            name: "school"
        },
    ])
    staffMemberData.push(newIntern)
 }