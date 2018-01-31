const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
    entry: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    devtool: IS_DEV ? 'source-map' : '',
    devServer: {
        hot: true,
        port: 9000,
        contentBase: 'dist',
        historyApiFallback: true,
    },
    plugins: IS_DEV
        ? [
              new webpack.NamedModulesPlugin(),
              new webpack.HotModuleReplacementPlugin(),
              new HtmlWebpackPlugin({
                  template: './src/index.html',
              }),
              new CopyWebpackPlugin([
                  {
                      from: path.join(__dirname, 'src', 'assets'),
                      to: path.join(__dirname, 'dist', 'assets'),
                  },
              ]),
              new webpack.DefinePlugin({
                  __URL_PREFIX__: JSON.stringify(''),
              }),
          ]
        : [
              new CleanWebpackPlugin(['dist']),
              new HtmlWebpackPlugin({
                  template: './src/index.html',
              }),
              new CopyWebpackPlugin([
                  {
                      from: path.join(__dirname, 'src', 'assets'),
                      to: path.join(__dirname, 'dist', 'assets'),
                  },
              ]),
              new webpack.DefinePlugin({
                  __URL_PREFIX__: JSON.stringify('/imperial-assault-dice'),
              }),
          ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: IS_DEV
                    ? [
                          'style-loader',
                          'css-loader',
                          'resolve-url-loader',
                          'sass-loader?sourceMap',
                      ]
                    : [
                          'style-loader',
                          'css-loader',
                          'resolve-url-loader',
                          'sass-loader',
                      ],
            },
            {
                test: /\.(svg)$/,
                loader: 'url-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.(json)$/,
                exclude: /(node_modules)/,
                loaders: ['json-loader'],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: [
                    'url-loader?limit=10000&mimetype=application/font-woff',
                ],
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loaders: ['url-loader?limit=10000'],
            },
            {
                test: /\.(mp3)$/,
                loaders: ['url-loader?limit=10000'],
            },
        ],
    },
    resolve: {
        alias: {
            containers: path.join(__dirname, 'src', 'containers'),
            components: path.join(__dirname, 'src', 'components'),
            reducers: path.join(__dirname, 'src', 'reducers'),
            actions: path.join(__dirname, 'src', 'actions'),
            scss: path.join(__dirname, 'src', 'scss'),
            data: path.join(__dirname, 'src', 'data'),
        },
    },
};
