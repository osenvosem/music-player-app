const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: "./src"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].bundle.js",
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    contentBase: path.resolve("./public"),
    hot: true
  }
};
