module.exports = ({ config, mode }) => {
  const tsConfig = {
    test: /\.(tsx?)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: ["@babel/env", "@babel/react", "@babel/typescript"],
    }
  };

  config.module.rules.push(tsConfig);
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
