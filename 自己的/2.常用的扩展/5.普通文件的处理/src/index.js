
const url = require('./img/webpack.png');

if(Math.random() < 0.8){
    const img = document.createElement('img');
    img.src = url.default;
    document.body.appendChild(img);
};

console.log(url);
