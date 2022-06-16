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

  const tsConfig = {
    test: /\.(tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: ["@babel/env", "@babel/react", "@babel/typescript"],
      plugins: [
        [
          "babel-plugin-react-docgen-typescript",
          {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop, component) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes("node_modules");
              }

              return true;
            }
          }
        ]
      ]
    }
  };

  newConfig.push(cssConfig);
  newConfig.push(tsConfig);

  config.module.rules = newConfig;
  config.resolve.extensions.push(".ts", ".tsx", ".css");

  return config;
};
