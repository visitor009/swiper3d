let {series,parallel,src,dest, watch } = require("gulp");
let del = require("delete");
let prefixcss = require("gulp-autoprefixer");
let cssnano = require("gulp-cssnano");
let autoprefixer = require('gulp-autoprefixer');
let babel = require('gulp-babel');

function clean(cb) {
    del("build/");
    cb();
}
let css = function(cb){
    return src(["src/css/*.css"])
        .pipe(autoprefixer({
            cascade: true, //是否美化属性值 默认：true 像这样：
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(cssnano())
        .pipe(dest("build/css"));
    cb();
}
let js = function(cb){
    return src(["src/js/*.js"])
        .pipe(babel())
        .pipe(dest("build/js"));
    cb();
}
exports.default = series(clean,css,js);
