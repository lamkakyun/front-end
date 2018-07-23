var webpack = require('webpack');

var config = {
    mode: "development",
    // entry: './main.js',
    entry: [
        'react-hot-loader/patch',
        './main.js'
    ],
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       host: '0.0.0.0',
       port: 8080,
       hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                        presets: ['es2015', 'react']
                        }
            }
        ]
    }
    ,
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
 }
 module.exports = config;