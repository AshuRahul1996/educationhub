import path from 'path'
const { override, modifyWebpackConfig } = require('customize-cra');

module.exports = override(
  modifyWebpackConfig(config => {
    config.output.path = path.resolve(__dirname, 'my-custom-build-dir');
    return config;
  })
);
