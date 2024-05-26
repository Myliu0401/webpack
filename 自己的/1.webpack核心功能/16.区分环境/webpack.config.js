/* 
 
  默认的配置

*/
/* module.exports = {
    mode:'development',
    devtool:'eval',
} */



//导入开发环境配置
const dev = require('./webpack.devt.js');

//导入生产环境配置
const peod = require('./webpack.prod.js');

//导入公共配置
const tongyi = require('./webpack.tonyi.js');





/* 
   配置为函数
*/
module.exports = function (env) {
  console.log(env)
  if (env !== undefined && env.dev) { //为开发环境

    return { //使用展开运算符
      ...dev,
      ...tongyi
    };

  } else { //为生产环境

    return { //使用展开运算符
      ...peod,
      ...tongyi
    }

  }
};