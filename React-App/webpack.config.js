const webpack = require('webpack');

const config = {
    entry:  __dirname + '/app/index.jsx',
    output: {
        path: __dirname + '../../Flask-App/app/static/js',
        filename: 'app.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    }
};



module.exports = config;