const loaderUtils = require('loader-utils');

/* eslint-disable func-names */
module.exports = function (input) {
  const options = loaderUtils.getOptions(this);

  // no options
  if (!input) {
    return input;
  }

  let files = options.file || options.file;

  if (!files) {
    return input;
  }

  if (typeof files === 'string') {
    files = [files];
  }

  const absFiles = files
    .map(f => `${process.cwd()}/${f}`)
    .filter(f => f !== this.resourcePath);

  const imports = absFiles.map(f => `@import '${f}';`).join('\n');
  const result = `${imports}

${input}`;

  return result;
};

