var webpack = require('webpack')
var path = require('path')
module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: path.resolve(__dirname, 'app'),
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']}
    ]
  }
}
