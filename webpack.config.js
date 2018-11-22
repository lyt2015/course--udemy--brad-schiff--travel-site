const path = require('path')

module.exports = {
  entry: {
    app: './assets/scripts/app.js',
    vendor: './assets/scripts/vendor.js',
  },
  output: {
    path: path.resolve(__dirname, 'temp', 'scripts'),
    filename: '[name].js',
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
