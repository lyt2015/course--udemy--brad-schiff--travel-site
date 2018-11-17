const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')

const config = {
  mode: {
    css: {
      render: {
        css: {
          template: './gulp/templates/sprite.css',
        },
      },
    },
  },
}

gulp.task('createSprite', () => {
  return gulp
    .src('./assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./temp/sprite/'))
})
