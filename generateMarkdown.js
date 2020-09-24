function generateMarkdown(response){
let licenseText = "";
if (response.license === "MIT"){
    licenseText = "This application is licensed under the MIT license.."
} else if  (response.license === "Apache"){
    licenseText = "This application is licensed under the Apache license.."
} else if  (response.license === "GNU"){
    licenseText = "This application is licensed under the GNU license.."
} else if (response.license === "Boost Software"){
    licenseText = "This application is licensed under the Boost Software license.."
}
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
- [GitHub](https://github.com/${response.gitHub})
- [Email](${response.email})
`
}
module.exports = generateMarkdown; 