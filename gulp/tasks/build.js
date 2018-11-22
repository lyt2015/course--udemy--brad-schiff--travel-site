const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const del = require('del')
const usemin = require('gulp-usemin')
const rev = require('gulp-rev')
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync').create()

gulp.task('previewDist', () => {
  browserSync.init({
    notify: false,
    port: 8080,
    server: {
      baseDir: './dist',
    },
    ui: {
      port: 3000,
    },
  })
})

gulp.task('deleteDistFolder', () => {
  return del('./dist')
})

gulp.task('copyGeneralFiles', ['deleteDistFolder'], () => {
  const pathToCopy = [
    './**/*',
    '!./*',
    '!./node_modules/**',
    '!./gulp/**',
    '!./assets/images/**',
    '!./assets/styles/**',
    '!./assets/scripts/**',
    '!./temp',
    '!./temp/**',
  ]

  return gulp.src(pathToCopy).pipe(gulp.dest('./dist'))
})

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], () => {
  return gulp
    .src(['./assets/images/**/*', '!./assets/images/icons', '!./assets/images/icons/**/*'])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true,
      })
    )
    .pipe(gulp.dest('./dist/assets/images'))
})

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], () => {
  return gulp
    .src('./index.html')
    .pipe(
      usemin({
        css: [() => rev(), () => cssnano()],
        js: [() => rev(), () => uglify()],
      })
    )
    .pipe(gulp.dest('./dist'))
})

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin'])
