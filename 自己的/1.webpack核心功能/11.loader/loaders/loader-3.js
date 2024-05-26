const loaderUtils = require('loader-utils');

module.exports = function (Text) {
    console.log('loader3');
    return Text;
}