const loaderUtils = require('loader-utils');

module.exports = function (Text) {
    console.log('loader4');
    return Text;
}