// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
