const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';

const loaders = require('./webpack.loaders');

loaders.push(
  {
    // global css
    test: /\.css$/,
    exclude: /[/\\]src[/\\]/,
    // include: /[\/\\](globalStyles)[\/\\]/,
    loaders: ['style-loader?sourceMap', 'css-loader']
  },
  // global scss
  {
    test: /\variables.scss$/,
    // exclude: /[\/\\]src[\/\\]/,
    // include: /[/\\](styles/variables.scss)[/\\]/,
    loaders: ['sass-variable-loader']
  },
  // global scss
  {
    test: /\.scss$/,
    // exclude: /[\/\\]src[\/\\]/,
    include: /[/\\](global)[/\\]/,
    loaders: ['style-loader?sourceMap', 'css-loader', 'sass-loader']
  },
  {
    test: /\.less/,
    // exclude: /[\/\\]src[\/\\]/,
    include: /[/\\](node_modules)[/\\]/,
    loaders: ['style-loader?sourceMap', 'css-loader', 'less-loader']
  },
  // local scss modules
  {
    test: /\.scss$/,
    // include: /[/\\](components)[/\\]/,
    exclude: /[/\\](global)[/\\]/,
    loaders: [
      'style-loader?sourceMap',
      'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'postcss-loader',
      'sass-loader'
    ]
  },
  // local scss modules
  {
    test: /\.css$/,
    include: /[/\\](components)[/\\]/,
    loaders: [
      'style-loader?sourceMap',
      'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'postcss-loader'
    ]
  },
  {
    test: /bootstrap\/dist\/js\/umd\//,
    loader: 'imports-loader?jQuery=jquery'
  }
  // {
  //   test: /mapbox-gl.+\.js$/,
  //   loader: 'transform-loader/cacheable?brfs'
  // }
);

// local css modules
// loaders.push({
//   test: /\.css$/,
//   exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
//   loaders: [
//     'style?sourceMap',
//     'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
//   ]
// });

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    './src/index.jsx' // your app's entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Src: path.resolve(__dirname, 'src')
    }
    // alias: {
    //   'mapbox-gl$': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
    //   // TODO
    //   // src$: './src'
    // }
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: './public',
    // noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
    // profile: true
    // proxy: {
    //   '**': {
    //     target: 'http://localhost:8000/',
    //     secure: false
    //   }
    // }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
    // new webpack.optimize.ModuleConcatenationPlugin()
    // new webpack.ProvidePlugin({
    // $: 'jquery',
    // jQuery: 'jquery',
    // 'window.jQuery': 'jquery',
    // Tether: 'tether',
    // 'window.Tether': 'tether'
    // Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
    // Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
    // Button: 'exports-loader?Button!bootstrap/js/dist/button',
    // Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
    // Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
    // Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
    // Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
    // Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
    // Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
    // Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
    // Util: 'exports-loader?Util!bootstrap/js/dist/util'
    // })
  ]
};
