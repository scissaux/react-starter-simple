const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const config = Object.assign({}, baseConfig)

config.devtool = 'source-map'
config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new ExtractTextPlugin('style.css')
  )

  // Production rules
config.module.rules.push(
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader!postcss-loader',
    }),
  }
)

module.exports = config
