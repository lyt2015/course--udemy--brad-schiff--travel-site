const gulp = require('gulp')
const webpack = require('webpack')

gulp.task('scripts', ['modernizr'], callback => {
  webpack(require('../../webpack.config'), (error, stats) => {
    if (error) {
      console.log(error.toStrin())
    }

    console.log(stats.toString())

    callback()
  })
})
