const loaderUtils = require('loader-utils');

module.exports = function (Text) {
    console.log('loader5');
    return Text;
}