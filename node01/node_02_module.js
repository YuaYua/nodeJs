//引入模块只有是当前路径下才需要加"./"
//否则只需要写入模块名称即可，
//会自动根据我们modules.paths里面的路径数组依次查找，
//如果到最后还是找不到才会报错，，只要在任何一层找到就会正常引入
//除了可以在 node_modules文件夹中放我们要引入的模块的 js 之外，
// 我们还可以放一个我们要引入模块的名称的文件夹
//默认 nodejs 帮我们进入他当中的 index.js，
// 如果想要改变引入必须设置我们的 package.json这个配置文件，
// 设置"main"属性为我们想要进入的 js文件的名称（可省略.js）
var home = require("home");
var obj=require("./obj");
var express=require("express");

console.log(home.first);
console.log(home.second);
home.third(50);
var app=obj();
app.use();
console.log(module);