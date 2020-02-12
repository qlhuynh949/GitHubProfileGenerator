const inquirer = require('inquirer')
const fs = require('fs')
const api = require('./utils/api.js')
const generateMarkdown = require('./utils/generateMarkdown.js')
const questions = [{ type: 'input', name: 'username', message: 'What is your GitHub Username?' }
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
      let markDown = generateMarkdown(data)
      let fileName = user + '.md'
      writeToFile(fileName, markDown)
    })

  })
}

init();
