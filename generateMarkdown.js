function generateMarkdown(response){
return `
# ${response.title}

## Description
${response.description}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Tests)
* [Questions](#Questions)

## Installation
${response.installation}

## Usage
${response.usage}

## ILicense
${response.license}

## Contributing
${response.contributing}

## Testing
${response.test}

## Questions
${response.questions}
`
}
module.exports = generateMarkdown; 