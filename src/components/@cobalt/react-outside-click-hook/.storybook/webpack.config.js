const path = require("path");

const packageJsonPath = path.resolve(process.cwd(), "package.json");
const pkg = require(packageJsonPath);
const componentName = pkg.name.replace("@cobalt/", "");
const version = pkg.version.replace(/\./g, "-");

module.exports = ({ config, mode }) => {
  const newConfig = config.module.rules.filter(ruleObj => {
    const test = String(ruleObj.test);
    return test !== String(/\.css$/);
  });

  const cssConfig = {
    test: /\.css$/,
    loaders: [
      require.resolve("style-loader"),
      {
        loader: require.resolve("css-loader"),
        options: {
          modules: {
            getLocalIdent: (context, localIdentName, localName, options) => {
              return `${componentName}_${version}_${localName}`;
            }
          }
        }
      }
    ]
  };

  newConfig.push(cssConfig);

  config.module.rules = newConfig;
  config.resolve.extensions.push(".css");

  return config;
};
