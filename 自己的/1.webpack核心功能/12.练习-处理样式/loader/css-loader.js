module.exports = function (Text) {

    const Tss = `const style = document.createElement('style');
    style.innerHTML = \`${Text}\`;
    document.head.appendChild(style);
    module.exports = \`${Text}\``;
    console.log(Tss);
    return Tss;
};


/* 
  原理: loader函数是要参与 node环境中的运行
       而 node 环境中没有bom中的代码。

       所以直接返回自己写的代码,等在浏览器环境中的运行

       源码部分加特殊处理原因: 
              如果不加字符串,在最后在原型打包时在,在AST解析中 没有body这个对象,而且语法也有错,所以要加字符串,
              因为在AST解析时报错


*/