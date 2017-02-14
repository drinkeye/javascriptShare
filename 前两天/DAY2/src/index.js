// var name = "111";
// var app = document.createElement('div');
// app.id = 'app';
// app.innerHTML = name;
// document.body.appendChild(app);

require('./css/reset.css');
require('./css/index.less');

let createHTML = (content)=> {
    let app = document.createElement('div');
    app.innerHTML = content;
    app.className = 'box';
    document.body.appendChild(app);
};

createHTML('珠峰培训');
createHTML('软件学院');

let oImg = new Image;
//oImg.src = 'img/logo.png';//->编译的时候这样写只是把内容编译了
oImg.src = require('./img/logo.png');
document.body.appendChild(oImg);
