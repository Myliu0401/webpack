/* 颜色 */
const color = ['rgb(17, 133, 235)', 'rgb(39, 17, 235)', 'rgb(17, 228, 235)', 'rgb(17, 235, 64)', 'rgb(235, 104, 17)',
    'rgb(235, 17, 235)', 'rgb(235, 17, 28)'
];


/**
 * 随机数函数
 * @param {*} max  最大值
 * @param {*} min  最小值
 * @returns
 */
export function shuijishu(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
};


/**
 * 产生随机颜色函数
 * @returns
 */
export function naicolor() {
    return color[shuijishu(color.length, 0)];
}