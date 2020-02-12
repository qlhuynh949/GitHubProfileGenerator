const generateMarkdown = (data, screen) => {
  return `
* Table of Contents
1. Project title
1. Description
1.  Installation
1.  Usage
1.  License
1.  Contributing
1.  Tests
1.  Questions
1.  User GitHub profile picture
1.  User GitHub email

## Project title: ${screen.title}
## Description: ${screen.description}
## Installation: ${screen.installation}
## Usage: ${screen.usage}
## License: ${screen.license}
## Contributing: ${screen.contribute}
## Tests: ${screen.test}
## Questions: ${screen.questions}

## Profile picture: ![GitHub avatar](${data.avatar_url})
## Email: ${data.email}

`
}

module.exports = generateMarkdown;
