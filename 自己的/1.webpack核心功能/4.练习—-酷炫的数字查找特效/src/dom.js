import {
    shuijishu , naicolor
} from './yanse.js';

import { remove } from './remove';


const xiao = document.querySelector('#xiao');
const da = document.querySelector('#da');
const body = document.querySelector('body');
export const arr = [];

/**
 * 生成div函数
 * @export
 * @param {*} i        数字
 * @param {*} boolran  布尔值
 * @param {*} yanse    颜色
 */
export function Dom(i, boolran, yanse) {
    da.innerText = i;
    if (boolran) {
        const div = document.createElement('div');
        div.classList.add('conter');
        div.innerText = i;
        let obj = div.style;
        obj.color = yanse; 
        body.appendChild(div);
        getComputedStyle(div).left; /* 要重写刷新页面,这里是关于重绘的智识 */
        obj.transform = `translate(${shuijishu(-200,200)}px,${shuijishu(-200,200)}px)`
        obj.opacity = 0;
        span(i, boolran, yanse); 
        arr.push(div)
        remove(arr);
    } else {
        span(i, boolran, yanse);
    }
};


/**
 * 产生span标签函数
 * @param {*} i          数字
 * @param {*} boolran    布尔值
 * @param {*} yanse      颜色
 */
function span(i, boolran, yanse) {
    const span = document.createElement('span');
    span.innerText = i;
    boolran ? span.style.color = yanse : '';
    xiao.appendChild(span);
}