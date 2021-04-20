import path from "path";
import htmlWebpackPlugin from "html-webpack-plugin";
import miniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  mode: "production",
  devtool: "source-map",
  // entry: "./src/index.js",
  entry: {
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new miniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),

    // create HTML file that includes reference to bundled js
    new htmlWebpackPlugin({
      template: "src/index.html",
      // Properties you define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken: "f8165c1b59984cb38e3ba6fc96a283f8",
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      // { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.css$/, use: [miniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};