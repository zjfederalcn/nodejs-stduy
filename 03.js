//非异步回调的方式

var fs = require('fs')
var data =  fs.readFileSync('input.txt');
console.log(data.toString());
console.log('程序结束');
