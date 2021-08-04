const path = require('path'); // modulo path que viene nativo de node
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    port: 3000,
    public: 'localhost:3000',
    open: true,
    historyApiFallback: true, // fix cannot get on refresh
    contentBase: path.resolve(__dirname, '../src'),
    disableHostCheck: true // That solved it
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'] // incluir loaders de css
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    }),
  ],
}
