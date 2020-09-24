function generateMarkdown(response){
    return `

# ${response.title}
![](https://img.shields.io/static/v1?label=${response.license}&message=${response.gitHub}&color=blueviolet)

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
- [GitHub](https://github.com/${response.gitHub})
- [Email](${response.email})
`
}
module.exports = generateMarkdown; 