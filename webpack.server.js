const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const serverConfig = {
  mode: "development",
  // webpack编译后运行的环境
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};

module.exports = merge(baseConfig, serverConfig);
