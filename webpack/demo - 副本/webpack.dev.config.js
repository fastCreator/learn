var webpack = require("webpack"),
path = require("path"),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
extractCSS = new ExtractTextPlugin('[name].[hash].css'),
CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['./app1.js','./app2.js'],
  output: {
    filename: "[name].[hash].js",
    path: __dirname+'/dist/assets/',
    //    publicPath: "/dist/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
             exclude: /node_modules/,//不包括
             loader: 'babel-loader',
           },
        //{ test: /\.css$/, loaders: ['style', 'css'] },
       // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader") },
        //{test: /\.css$/,loader:  'style-loader!css-loader!autoprefixer-loader' },
        {test: /\.css$/,loader:  extractCSS.extract('style','css')},
        {test: /\.less$/,loader: "style!css!less"},
        { test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
        { test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif" },
        { test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png" },
        { test: /\.svg/, loader: "url-loader?limit=10000&mimetype=image/svg" },

        ]
      },
      babel: {
       presets: ['es2015']
     },
  	resolve: {// 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    root: path.resolve('./'),
    extensions: ['', '.js', '.json', '.less'],
    alias: {
      'util': path.resolve(__dirname, './src/app.util/index.js'),
      'config': path.resolve(__dirname, './src/config.js')
    }
  },
  plugins: [
  // 在打包前清空 assets/ 文件夹
  new CleanPlugin('./dist/assets/'),
  // 允许错误不打断程序
  new webpack.NoErrorsPlugin(),
  //导出link
  extractCSS,
  //生成HTML
  new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html'
  }),
  //混淆
  //new webpack.optimize.UglifyJsPlugin(),
  //设置vendor
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('./manifest.json')
  }),
  //设置开发环境
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery'
  }), 


  ],

    // externals:[{
    // 	'jquery':'jquery'
    // }]
    
  }