const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync').create()

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./temp/styles/styles.css').pipe(browserSync.stream())
})

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    port: 8080,
    server: {
      baseDir: './',
    },
    ui: {
      port: 3000,
    },
  })

  watch('index.html', () => {
    browserSync.reload()
  })

  watch('./assets/styles/**/*.css', () => {
    gulp.start('cssInject')
  })
})
