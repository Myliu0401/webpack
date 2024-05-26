/**
 * 判断质数函数
 * @param {*} n 为质数
 * @returns   
 */
export  function zishu(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= n - 1; i++) {
        if (n % i === 0) {
            //发现，2到n-1之间，有一个数能整除n
            return false;
        }
    }
    return true;
}