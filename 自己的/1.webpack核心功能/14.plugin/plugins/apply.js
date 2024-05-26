module.exports = {
    apply: function (complier) {
        console.log('运行apply!!!');
        complier.hooks.done.tap('name', function (complitaion) {
            console.log('编译完成');
            console.log(complitaion)
        }); //done事件,当编译完成时,会运行上面这个函数,并且将complitaion对象传进去
    },
};