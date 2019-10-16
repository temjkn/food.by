var gulp = require('gulp');

gulp.task('default', ['clean'], function () {
    return gulp.start('watch', 'connect', 'pug', 'bower', 'copy', 'sprite', 'svgSprite', 'stylus', 'javascript', 'ttf2woff');
});