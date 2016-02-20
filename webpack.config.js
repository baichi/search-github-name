'use strict';

var path = require('path');
var webpack = require('webpack');

var srcPath = path.join(__dirname, '/app');
var publicPath = path.join(__dirname, '/public');

module.exports = {
  devtool: '#source-map',

  entry: {
    'app': path.resolve(__dirname, './app/App.js'),
    // 第三方资源单独合并为一个文件加载
    'vendor': ['react', 'react-dom']
  },

  output: {
    path: publicPath,
    filename: '[name]-bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.js?$/,
        include: srcPath,
        loader: 'babel'
      }
    ]
  },

  postcss: function () {
    return [];
  },

  resolve: {
    // 解析文件
    extension: ['', '.js', '.jsx', '.json'],
    // 配置别名
    alias: { /* key-value 形式*/ }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 往每个文件头添加公共信息
    new webpack.BannerPlugin('created by guoyongfeng')
  ]
};
