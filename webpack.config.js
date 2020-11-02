const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  entry: {
    app: ['./app.js', './styles/global.css'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].min.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.style\.css$/,
        use: ['css-loader'],
      },
      {
        test: /(?<!\.style)\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      (isProd && {
        test: /node_modules\/miragejs\//,
        use: 'null-loader',
      }),
    ].filter((rule) => rule),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'github vanilla',
      template: 'index.html',
      hash: true,
      meta: {
        viewport: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0',
        charset: 'UTF-8',
      },
    }),
  ],
};
