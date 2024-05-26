const loaderUtils = require('loader-utils');

module.exports = function (Text) {
    console.log('loader运行了');
    const vulas = loaderUtils.getOptions(this);
    console.log(vulas);
    return Text.replace(new RegExp(vulas.naisi,'g'), 'var');
}