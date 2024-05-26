module.exports = class My_plugin {
    constructor(file = 'file.txt') {
        this.file = file;

    };


    apply(complier) {
 
        //取this
        const misi = this

      
        //注册事件
        complier.hooks.emit.tap('emit', function (complitaion) {
            /* 
              emit事件,表示在生成总资源列表时,触发
            */


            console.log(complitaion.assets); //complitaion.assets是一个对象,里面是总资源列表
            /* 
               assets对象中,每一个对象代表每一个文件
               assets里面每一个对象中有source函数和size函数
               source函数返回文件内容
               size函数返回文件的大小

            
            */


            const arr = []; //用来装循环的

            //循环得到 assets列表的属性名和每个文件的大小
            for (var key in complitaion.assets) {
                arr.push(`【${key}】\n   ${complitaion.assets[key].size()/1000+'kb'}`);
            };



            //在总资源列表中创建一个文件
            complitaion.assets[misi.file] = {
                //文件的内容
                source: function () {
                    return arr.join('\n') + `\n    filen的总kb:${123456}`; //将数组的每一项进行转换
                },

                //文件的大小
                size: function () {
                    return '123kb'
                }
            };



        })
    }
}