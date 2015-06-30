
var cssimport = require('postcss-import')
var customprops = require('postcss-custom-properties')
var media = require('postcss-custom-media')

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json/, loader: 'json-loader' },
      //{ test: /\.css$/, loader: 'css-loader!cssnext-loader' }
      {
        test: /(^basscss|\.css$)/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
        //loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!cssnext-loader')
      },
    ]
  },

  postcss: function () {
    return [cssimport, customprops, media]
  },

  cssnext: {
    compress: true
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]

}

