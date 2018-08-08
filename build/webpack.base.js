const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode:'production',
  entry:'./src/index.js',
  output:{
    filename:'cm-dev-utils.min.js',
    path:path.resolve(__dirname,'../util'),
    publicPath:'./'
  },
  plugins:[
    new CleanWebpackPlugin(['util'])
  ]
}