const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * @param {Object} env - передаётся через CLI флагами, например: --env production
 */
module.exports = (env = {}) => {
  const isProd = env.production;

  return {
    entry: './src/index.tsx',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
      publicPath: isProd ? '/doctor/' : '/', // 👈 Условный путь
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: false,
                },
              },
            },
            'less-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'public/models', to: 'models' }, // 👈 копирует в dist/models/
        ],
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
      port: 3001,
      open: true,
      hot: true,
      liveReload: true,
      watchFiles: ['src/**/*', 'public/**/*'],
    },
    mode: isProd ? 'production' : 'development',
  };
};
