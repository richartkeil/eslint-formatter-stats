'use strict'

const stats = require('eslint-stats/byErrorAndWarning');
const codeframe = require('eslint/lib/cli-engine/formatters/codeframe');

module.exports = function(results) {
  return codeframe(results) + "\n\n" + stats(results);
}
