const path = require('path');

module.exports = function (input) {
  const options = JSON.parse(this.query.slice(1));
  const absFile = path.resolve(process.cwd(), options.file);

  // Same file
  if (absFile === this.resourcePath) {
    return input;
  }

  const result = `@import '${absFile}';

${input}`;

  return result;
};

