const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.tmp,
        conf.paths.src,
        conf.paths.data
      ]
    },
    open: false
  };
};
