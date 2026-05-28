const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const projectRoot = path.resolve(__dirname, "../..");

module.exports = {

  context: projectRoot,

  entry: "./src/index.js",

  output: {
    path: path.resolve(projectRoot, "dist"),
    filename: "bundle.js",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: path.resolve(projectRoot, "babel.config.json"),
          },
        },
      },

      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(projectRoot, "public/index.html"),
    }),
  ],
};