const Employee = require ("..../lib/Employee");
const Engineer = require ("..../lib/Engineer");
const Intern = ("..../lib/Intern");
const Manager = ("..../lib/Manager");

const inquirer = require ("inquirer");
const fs = require ("fs");
const until = require ("until");

const writeFileAsync = promisify(writeFile);

function devTeam(){
    prompt ([
        {
            type:"input",
            name:"name",
            message:"Development team name?"
        },
        {
            type:"input",
            name:"engineerCount",
            message:"Number of Engineers?"
        },
        {
            type:"input",
            name:"internCount",
            message:"Number of Engineers?"
        }
    ]).then(function(answers) {
        promptManager(answers);
    })
}

devTeam();



