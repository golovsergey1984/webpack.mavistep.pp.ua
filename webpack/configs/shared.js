const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const paths = require('../utils/paths');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => ({
  mode: env.mode,
  context: paths.SRC_DIR,
  entry: {
    index: './entry/index.js',
    identify: './entry/identify.js',
  },
  output: {
    path: paths.BUILD_DIR,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.SRC_DIR,
        use: ['babel-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 10000,
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'underscore-template-loader',
        /* use: 'html-loader', */
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBar(),
    new CopyPlugin([
      { from: paths.SRC_DIR + '/images', to: `images` },
      { from: paths.SRC_DIR + '/favicon', to: `favicon` },
      /*  { from: paths.SRC_DIR + '/entry', to: `./` }, */
      /*  { from: paths.SRC_DIR + '/static', to: `static` }, */
    ]),
  ],
});
