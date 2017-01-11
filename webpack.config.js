htmlPlugin = require("html-webpack-plugin")

htmlPluginConfig = {
  template: "index.pug"
}

module.exports = {
  context: __dirname + "/src",
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.[hash].js"
  },
  module: {
    loaders: [
      {
        test: /\.pug$/,
        loader: "pug-loader"
      }
    ]
  },
  plugins: [new htmlPlugin(htmlPluginConfig)]
}
