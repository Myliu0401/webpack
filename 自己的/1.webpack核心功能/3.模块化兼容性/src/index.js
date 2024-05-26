
/* es6导出,commonjs导入 */
/* const obj = require('./es6');
console.log(obj);
console.log(obj.a, obj.b, obj.default); */



/* commonjs导出  es6导入 */
/* import * as obj from './common';
console.log(obj);

import c from './common';
console.log(c); */


/* 导入第三方库 */
const obj2 = require('jquery');/* commonjs导入 */
console.log(obj2)


/* 下面为es导入 */
import obj3 from 'jquery'
console.log(obj3)

import * as obj4 from 'jquery'
console.log(obj4)



/* 
  用es6的默认导出
  commonjs导入的不同点

*/
const obj5 = require('./es6_1');
console.log(obj5)



