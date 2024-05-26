const path = require('path');
const juedui = path.resolve(__dirname, 'src');

module.exports = {
    mode: 'development',

    //context绝对路径,影响配置文件里面配置需要路径的文件,配置的路径在context路径在进行
    entry: { //入口文件在context路径下进行
        index: ['./a.js', './index.js']
    },
    context: juedui,


    output: {
        library: 'abc',
        libraryTarget: 'var',
    },

    target: 'web',

    devtool: 'source map',

    module: {
        noParse: /jquery/, //不对匹配得到的模块做任何解析
    },


    resolve: {
        modules: ['node_modules'], //不用 ./ 开头 的模块的查找位置
        extensions: ['.js', 'json'], //为导入模块添加后缀名

        //简写导入模块的路径
        alias: {
            "@": juedui, //绝对路径
        }
    },

    externals:{
        lodash:'_',
    },

    stats:{
        colors:true,
    }
};

console.log(juedui);