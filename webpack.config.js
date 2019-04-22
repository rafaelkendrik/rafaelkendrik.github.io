var webpack = require('webpack')
const path = require('path')

var config = {
  context: path.join(__dirname + '/src'),
  entry: {
    app: './main.js'
  },

  output: {
    path: path.join(__dirname + '/docs'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}

module.exports = config
