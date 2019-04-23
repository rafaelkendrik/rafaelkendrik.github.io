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
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
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
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join(__dirname, 'assets/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('assets/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.join('assets/[name].[hash:7].[ext]')
        }
      }
    ]
  },

  resolve: {
    extensions: ['.html', '.js', '.json'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}

module.exports = config
