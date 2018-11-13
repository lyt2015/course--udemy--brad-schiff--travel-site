const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoPrefixer = require('autoprefixer')
const cssVars = require('postcss-simple-vars')
const cssNested = require('postcss-nested')
const cssImport = require('postcss-import')

gulp.task('styles', () => {
  return gulp
    .src('./assets/styles/styles.css')
    .pipe(postcss([cssImport, cssVars, cssNested, autoPrefixer]))
    .on('error', function(error) {
      console.log(error.toString())
      this.emit('end')
    })
    .pipe(gulp.dest('./temp/styles'))
})
