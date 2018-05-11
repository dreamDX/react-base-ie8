const path = require("path");
const webpack = require("webpack");
const env = false ? "development" : "production";
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const middleware = `webpack-hot-middleware/client?path=/__webpack_hmr&reload=true`;

module.exports = {
  entry: {
    polyfill: ["babel-polyfill"],
    bundle: ["./src/index.js"]
  },
  // entry: [
  //   "babel-polyfill",
  //   // "eventsource-polyfill",
  //   // require.resolve("react-dev-utils/webpackHotDevClient"),
  //   // middleware,
  //   "./app/src/index.js"
  // ],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ""
  },
  // devServer: {
  //   contentBase: path.resolve(__dirname, "dist")
  // },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        enforce: "post",
        loaders: ["es3ify-loader"],
        include: [
          path.resolve(__dirname, "./src"),
          path.resolve(__dirname, "./node_modules/babel-polyfill")
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: "index.html"
    }),
    // new webpack.HotModuleReplacementPlugin()
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          properties: false
          // warnings: false
        },
        output: {
          // beautify: true,
          // quote_keys: true
        },
        ie8: true
      },
      sourceMap: false
    })
  ]
};
