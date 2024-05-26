const src = require('./img/webpack.png');

const img = document.createElement('img');
img.src = src.default;
document.body.appendChild(img);

console.log(src.default);


console.log(__webpack_public_path__)