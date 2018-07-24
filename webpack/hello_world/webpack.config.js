const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', // 准确跟踪错误和警告(这就是一种开发工具)
  devServer: {
    contentBase: './dist', // webpack-dev-server 将允许 ./dist 目录下面的文件
    port: 8080,
    host: '0.0.0.0',
    compress: true, // gzip 传输
  },
  output: {
    // filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // dist 文件夹在我们不停的重新编译的过程中，产生了许多废弃的文件，这个插件，重新生成dist 文件夹，清除了不需要的文件
    new HtmlWebpackPlugin({ // 有了这个插件，将重新生成 一个新的 index.html,使得我们修改 entry point或者其他配置时，无需手动修改 index.html
      title: 'Output Management'
    })
  ]
}
