//异步调用范例

var fs = require('fs');
fs.readFile('input.txt', function(err, data){
if(err) return console.error(err)
console.log(data.toString());
});

console.log('程序运行结束');
