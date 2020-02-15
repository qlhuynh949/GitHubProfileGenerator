const generateMarkdown = (data, screen) => {
  return `
* Table of Contents
1. [Project title](#Project)
1. [Description](#Description)
1.  [Installation](#Installation)
1.  [Usage](#Usage)
1.  [License](#License)
1.  [Contributing](#Contributing)
1.  [Tests](#Tests)
1.  [Questions](#Questions)
1.  [User GitHub profile picture](#Profile)
1.  [User GitHub email](#Email)

## Project
      ${screen.title}
## Description
      ${screen.description}
## Installation
      ${screen.installation}
## Usage
      ${screen.usage}
## License
     ${screen.license}
## Contributing
     ${screen.contribute}
## Tests
     ${screen.test}
## Questions
     ${screen.questions}
## Profile
     ![GitHub avatar](${data.avatar_url})
## Email
     ${data.email}

`
}

module.exports = generateMarkdown;
