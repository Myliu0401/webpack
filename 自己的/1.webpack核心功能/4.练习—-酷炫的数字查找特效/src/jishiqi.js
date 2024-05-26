

import { zishu } from './zishu.js';
import { Dom } from './dom.js';
import { shuijishu , naicolor } from './yanse.js';


/**
 * 一个计时器的类
 * @export
 * @class jishiqi
 */
export default class jishiqi {
    /* shijian为计时器的秒数,默认值为600毫秒 */
    constructor(shijian = 200) {
        this.shijian = shijian;
        this.timer = null;
        this.innerText = 0;
    };

    /**
     * 执行计时器函数
     * @memberof jishiqi
     */
    jishi() {
        this.timer = setInterval(() => {
             this.innerText += 1;
             console.log(this.innerText)
             Dom(this.innerText,zishu(this.innerText),naicolor());
        },this.shijian)
    };




    /**
     * 清空计时器函数
     * @memberof jishiqi
     */
    jiesu() {
        clearInterval(this.timer);
    }
}