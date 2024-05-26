const src = require('./assets/webpack.png'); //在webpack中一切皆为模块
const img = document.createElement('img');
img.src = src;
document.body.appendChild(img);
console.log(src);