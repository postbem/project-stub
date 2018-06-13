const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index.html': './src/index.html'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      chunks: 'index.html',
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
