const {
  removeModuleScopePlugin,
  override,
  babelInclude,
  addLessLoader
} = require('customize-cra');
const path = require('path');

module.exports = override(
  removeModuleScopePlugin(),
  babelInclude([
    path.resolve('src'),
    path.resolve('node_modules/@gpsi'),
  ]),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true
    },
  })
);
