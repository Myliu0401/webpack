/* 

   模拟 webpack 的 commonjs 模块 合并
   
   模拟的模块路径
   '../src/a.js'
   '../src/index.js'
  
*/


/* const module = {  
    //每个模块就是一个函数
    '../src/a.js':function (module,exports,require){
        console.log('a =====  webpack');
        module.exports.naisi = 'hello webpack!!!'; //导出模块
    },
    '../src/index.js':function (module,exports,require){
        const mdua = require('../src/a.js'); //导入模块
        console.log(mdua,'hello 启动文件');
    }
} */



/* 
   立即执行函数,避免污染全局变量
*/
(function (modules) {

    const Module_cache = { //用于装模块的返回结果,相当于 commonjs 里的缓存

    };


    //创建 导入 函数
    function require(moduleID) { //相当于 commonjs 里面的导出函数

        if (Module_cache[moduleID]) { //判断有没有相应的模块,如果有相应模块,就证明已经有缓存了
            return Module_cache[moduleID];
        } else {
            const func = modules[moduleID]; //得到  modules 参数里相应的函数
            func(module, module.exports, require); //执行 modules 参数的 相应的 模块函数
            Module_cache[moduleID] = module.exports; //将返回结果 赋进缓存对象
            return module.exports; //将模块的返回值返回
        }
    };

    //创建 导出 对象
    const module = { //相当于 commonjs 里面的导出对象
        exports: {}
    }

    require('../src/index.js'); //最先执行入口模块


    //多次执行相同函模块
    require('../src/index.js');
    require('../src/index.js');
    require('../src/index.js');
}({
    //每个模块就是一个函数
    '../src/a.js': function (module, exports, require) {
        //eval('console.log(\'a =====  webpack\');\nmodule.exports.naisi = \'hello webpack!!!\'\n //# sourceURL=../src/a.js')
        console.log('a =====  webpack');
        module.exports.naisi = 'hello webpack!!!'; //导出模块
    },
    '../src/index.js': function (module, exports, require) {
        const mdua = require('../src/a.js'); //导入模块
        console.log(mdua, 'hello 启动文件');
        //eval('const mdua = require(\'../src/a.js\');\nconsole.log(mdua, \'hello 启动文件\');\n //# sourceURL=../src/index.js')
    },
})); 