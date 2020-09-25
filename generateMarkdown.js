function generateMarkdown(response){
    // build out the bones for the readme 
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
// export the file for index.js to use 
module.exports = generateMarkdown; 