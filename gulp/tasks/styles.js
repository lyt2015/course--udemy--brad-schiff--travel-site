const gulp = require('gulp')
const postcss = require('gulp-postcss')
const autoPrefixer = require('autoprefixer')
const cssVars = require('postcss-simple-vars')
const cssNested = require('postcss-nested')
const cssImport = require('postcss-import')
const mixins = require('postcss-mixins')
const hexrgba = require('postcss-hexrgba')

gulp.task('styles', () => {
  return gulp
    .src('./assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssVars, cssNested, hexrgba, autoPrefixer]))
    .on('error', function(error) {
      console.log(error.toString())
      this.emit('end')
    })
    .pipe(gulp.dest('./temp/styles'))
})
