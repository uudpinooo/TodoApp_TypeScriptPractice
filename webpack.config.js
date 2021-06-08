const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './pages/app.ts',
  output: {
    filename: '/dist/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  },
};