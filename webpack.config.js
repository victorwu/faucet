const webpack = require('webpack');
const path = require('path');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const buildPath = path.resolve(__dirname, 'assets');
const commonLoaders = [
  { test: /\.js$/,

      loaders: [
          'react-hot',
          'babel-loader'
          //,'jsx-loader'
      ]
  }
];

const config = 
{
  name: 'client',
  target: 'node',
  mode: 'development',
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081' // WebpackDevServer host & port

  ],
  externals: {
    re2: 're2',
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: 'http://localhost:8081/assets/'
  },
  resolve: {
      alias: {
          semantic: path.resolve(__dirname, 'semantic/src/'),
      },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          // 'sass-loader',
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          ]
        },
      ]
    },
    resolve: {
      fallback: {
        child_process: false,
        dgram: false,
        fs: false,
        tls: false,
        net: false,
        // path: require.resolve('path-browserify'),
        // zlib: false,
        // http: require.resolve('stream-http'),
        // https: require.resolve('https-browserify'),
        // os: require.resolve('os-browserify'),
        // stream: require.resolve('stream-browserify'),
        // crypto: require.resolve('crypto-browserify'),
      },
      alias: {
        semantic: path.resolve(__dirname, 'semantic/src/'),
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: 'index.html',
        inject: 'body'
      }),
      // new webpack.ProvidePlugin({
      //     Buffer: ['buffer', 'Buffer'],
      // }),
      // new webpack.ProvidePlugin({
      //     process: 'process/browser',
      // }),
      new NodePolyfillPlugin()
    ]
  }
}
