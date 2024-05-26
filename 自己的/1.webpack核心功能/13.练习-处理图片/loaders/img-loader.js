/**
 * loader函数
 * @param {*} code 源代码
 */
function loader(code) {
    const misi = Bit64(code);
    console.log(misi);
    return `module.exports = \`${misi}\``;
}

loader.raw = true; //在 webpack中,loader函数如果raw属性为 true ,函数的参数,就会被处理成二进制形式


module.exports = loader; //将loader函数导出

function Bit64(bin) {
    return 'data:image/png;base64,' + bin.toString('base64');
     //二进制中的toString方法,传入参数'base64' 会返回一个base64的编码
}