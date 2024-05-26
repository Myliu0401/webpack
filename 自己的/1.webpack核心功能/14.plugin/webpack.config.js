
const apply = require('./plugins/apply.js'); //使用该函数,必须将其导入

module.exports = {
    mode:'development',
    plugins:[
        apply
    ],
    watch: true,
}