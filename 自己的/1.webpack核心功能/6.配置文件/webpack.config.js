
/* 

  webpack.config.js文件是参与 webpack 的执行打包的
  

*/


console.log('hello webpack.config.js')

module.exports = {
   mode:'development',  /* mode表示模式,打包后的文件在什么环境下运行 */
   entry:'./src/index.js', /* entry表示入口,表示src目录下那个文件做为入口文件 */
   output:{
       filename:'naisi.js' /* filename表示文件名,生成的结果,文件名 */
   }
}