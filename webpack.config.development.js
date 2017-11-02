const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')
const path = require('path')

const contentBasePath = path.join(__dirname, 'webpack-dev-server-content-base')

const config = Object.assign({}, baseConfig)

config.devtool = 'inline-source-map'
config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
)

config.devServer = {
  contentBase: contentBasePath,
  historyApiFallback: true,
  port: 8080,
  compress: true,
  inline: true,
  hot: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
}

config.module.rules.push(
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  }
)

module.exports = config

