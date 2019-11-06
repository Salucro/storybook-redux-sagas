// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

const path = require("path");
const root = path.resolve(__dirname, "..");

// load the default config generator.
module.exports = ({ config }) => {
  const {
    module: { rules },
    resolve: { extensions, alias }
  } = config;

  config.module.rules = [
    ...rules,
    {
      test: /\.tsx?$/,
      include: root,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    },
    {
      test: /\.scss$/,
      include: root,
      use: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 2
          }
        },
        require.resolve("sass-loader")
      ]
    }
  ];

  config.resolve.alias = { ...alias, src: path.resolve(root, "src") };
  config.resolve.extensions = [...extensions, ".ts", ".tsx"];
  return config;
};
