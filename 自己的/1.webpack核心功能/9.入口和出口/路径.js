console.log('路径');


console.log(__dirname);

/* 
 
  node 中的 path 模块 
  该模块提供了大量路径处理的函数

  模块中的 resolve 函数,用于拼接路径

*/

const path = require('path'); //导出一个对象
//该对象提供了大量路径处理的函数

const lujin = path.resolve('./','child','dac','123');
/* 
  ./ 在node中表示,当前的运行路径,后面三个参数,识别没有路径,会被直接拼接上去
*/

console.log(lujin);

console.log(path.resolve(__dirname,'naisi'));




