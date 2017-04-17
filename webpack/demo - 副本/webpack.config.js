var webpack = require("webpack");
var path = require("path"); 

module.exports = {
  entry: {vendor:[
    // 'jquery',
    'angular']},
  output: {
    filename: "[name].js",
    path: __dirname+'/dist/',
    library: '[name]_library'
    //    publicPath: "/dist/"
  }, 

    resolve: {// 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    root: path.resolve('./'),
    extensions: ['', '.js', '.json', '.less']
  },
  plugins: [   
  new webpack.DllPlugin({
    path: 'manifest.json',
    name: '[name]_library',
    context: __dirname
  }) ,
  
 ],
 externals:[{
   'jquery':'jquery'
 }]
  }