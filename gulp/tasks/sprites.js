const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const rename = require('gulp-rename')
const del = require('del')

const config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css',
        },
      },
    },
  },
}

gulp.task('beginClean', () => {
  return del(['./temp/sprite', './assets/images/sprites'])
})

gulp.task('createSprite', ['beginClean'], () => {
  return gulp
    .src('./assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./temp/sprite/'))
})

gulp.task('copySpriteGraphic', ['createSprite'], () => {
  return gulp.src('./temp/sprite/css/**/*.svg').pipe(gulp.dest('./assets/images/sprites'))
})

gulp.task('copySpriteCSS', ['createSprite'], () => {
  return gulp
    .src('./temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./assets/styles/modules'))
})

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS'])
