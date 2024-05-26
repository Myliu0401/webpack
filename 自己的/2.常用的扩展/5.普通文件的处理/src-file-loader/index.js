console.log('普通文件处理');

const png = require('./img/webpack.png');

if(Math.random() > 0.1){
    const img = document.createElement('img');
    img.src = png.default;
    document.body.appendChild(img);
};

console.log(png);