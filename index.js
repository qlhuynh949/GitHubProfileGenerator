const inquirer = require('inquirer')
const fs = require('fs')
const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js')
const questions = [{ type: 'input', name: 'username', message: 'What is your GitHub Username?' },
{ type: 'input', name: 'title', message: 'What is the title of your project?' }
  ,
{ type: 'input', name: 'description', message: 'Please shortly describe your project?' }
  ,
{
  type: "list",
  name: "license",
  message: "Please select the license for your project?",
  choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{
  type: "input",
  name: "installation",
  message: "How do you install dependencies?",
  default: "npm i"
},
{
  type: "input",
  name: "test",
  message: "What test commands need to be run?",
  default: "npm test"
},
{
  type: "input",
  name: "using",
  message: "Is there anything the user needs to know about to use the repo?",
},
{
  type: "input",
  name: "contribution",
  message: "Is there anything the user needs to know about to contribute to the repo?",
}
  ,
{
  type: "input",
  name: "questions",
  message: "Do you have any further questions?",
}
];

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
}


const init = () => {
  inquirer.prompt(questions).then(answers => {
    let user = answers.username
    api(user).then(data => {
      //console.log(data)
      let screenObject = {
        userName: answers.username,
        title: answers.title, description: answers.description,
        license: answers.license, installation: answers.installation, test: answers.test, usage: answers.using,
        contribute: answers.contribution,
        questions: answers.questions
      }
      let markDown = generateMarkdown(data, screenObject)
      let fileName = user + '.md'
      writeToFile(fileName, markDown)
    })

  })
}

init();
