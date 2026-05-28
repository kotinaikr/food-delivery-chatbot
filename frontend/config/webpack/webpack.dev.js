const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

const projectRoot = path.resolve(__dirname, "../..");

module.exports = merge(common, {

  mode: "development",

  devServer: {
    port: 3000,
    open: true,
    hot: true,
    static: {
      directory: path.resolve(projectRoot, "public"),
      watch: true,
    },
    historyApiFallback: true,
  },

  devtool: "inline-source-map",
});
