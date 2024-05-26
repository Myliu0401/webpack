/* 

  因为 配置文件 参与webpack编译的执行,所以可以导入

*/
const path = require('path');


module.exports = {
    mode: "development",
    
    
    /* 出口配置 */
    output: { 
        path: path.resolve(__dirname, "naisi"),/* 路径处理函数,会将路径合并 */
        
        filename:'[name]-[hash:6].js'

    },
    

    /* 入口配置 */
    entry: {
       main:'./src/index.js',
       a:['./src/a.js','./src/index.js']
  
    },

    /* devtool:"source-map" */
}