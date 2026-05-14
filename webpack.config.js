const {
  SharedMappings,
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new SharedMappings();

sharedMappings.register(
  path.join(__dirname, "tsconfig.json")
);

module.exports = withModuleFederationPlugin({
  name: 'ops',

  exposes: {
    './ops': './src/app/app.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    '@vcb/shared-libs': { singleton: true, strictVersion: false, requiredVersion: 'auto' },

    ...sharedMappings.getDescriptors()
  },
});
