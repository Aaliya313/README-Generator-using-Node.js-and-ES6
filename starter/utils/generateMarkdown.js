//Creating a function to display license badge 
function LicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}



// function to generate markdown for README
//Implemented license function at the top as the requirements state that the license should be at the top
function generateMarkdown(data) {
  return `# ${data.title}
${LicenseBadge(data.license)} 
## Description
${data.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#HowtoUseThisApplication)
* [License](#license)
* [Contributors](#contributors)
* [Testing](#test)
* [Questions](#questions)
## Installation
${data.installation}
## How to Use This Application:
${data.usage}
## License
${data.license}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
