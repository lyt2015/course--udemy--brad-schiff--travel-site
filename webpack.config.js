const path = require('path')

module.exports = {
  entry: './assets/scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'temp', 'scripts'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
}
