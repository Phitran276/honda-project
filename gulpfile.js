const {src, dest, series} = require('gulp');

//     return gulp.src(['node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'])

function css(cb){
    return src(['node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css', 'node_modules/animate.css/animate.css', 'node_modules/swiper/swiper-bundle.min.css'])
    .pipe(dest('css/'));
    cb();
}

function js(cb){
    return src(['node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js', 'node_modules/swiper/swiper-bundle.min.js'])
    .pipe(dest('js/'));
    cb();
}

exports.default = series(css, js);


