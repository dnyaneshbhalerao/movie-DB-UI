const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const os  = require('os');
//let LoaderOptionsPlugin = require('LoaderOptionsPlugin');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let uglifyJsPlugin = new UglifyJsPlugin({
      uglifyOptions:{
        output: {
          comments: false, // remove comments
        },
        parallel: os.cpus().length - 1,
        compress: true,
        ecma:6,
        warnings:false,
        ie8:true,
        cache: true
      }
      });

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "build"),
};

const htmlPlugin = new HtmlWebpackPlugin({
  title: "React Demo",
  filename: "index.html",
  template: "src/index.html",
  minify: true
});

module.exports = {
  mode: "development",
  entry:{
    app: PATHS.app
  },
  devServer: {
    // files are served from this folder
    contentBase: 'build',
    // support HTML5 History API for react router
    historyApiFallback: true,
    hot: true,
    // listen to port 5000, change this to another port if another server 
    // is already listening on this port
    port: 3000,
    // proxy requests to the JSON server REST service
    // proxy: {
    //     '/widgets': {
    //         // server to proxy
    //         target: 'http://0.0.0.0:3010'
    //     }
    // }
  },
  output: {
    path: PATHS.build,
    filename: "appBundle.js"
  },
  devtool: "eval-source-map",
  module:{
    rules: [{
        test: /\.(jsx||js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env",
              "react"
            ]
          }
        }
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins:[
    htmlPlugin,
    uglifyJsPlugin
  ],
}