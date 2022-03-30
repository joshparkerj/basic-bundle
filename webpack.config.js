const glob = require('glob');

module.exports = {
  mode: 'development',
  entry: glob.sync('./src/**/*.bundle.user.js'),
};
