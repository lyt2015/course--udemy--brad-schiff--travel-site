const gulp = require('gulp')
const watch = require('gulp-watch')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssvars = require('postcss-simple-vars')
const cssnested = require('postcss-nested')

gulp.task('default', () => {
  console.log('default Gulp task')
})

gulp.task('html', () => {
  console.log('html task')
})

gulp.task('styles', () => {
  return gulp
    .src('./assets/styles/styles.css')
    .pipe(postcss([cssvars, cssnested, autoprefixer]))
    .pipe(gulp.dest('./temp/styles'))
})

gulp.task('watch', () => {
  watch('index.html', () => {
    gulp.start('html')
  })

  watch('./assets/styles/**/*.css', () => {
    gulp.start('styles')
  })
})
