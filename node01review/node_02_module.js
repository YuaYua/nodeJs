//引入模块只有是当前路径下才需要加"./"
//否则只需要写入模块名称即可，
//会根据modules.paths里面的路径数组依次查找，
//如果到最后还是找不到才会报错，只要在任何一层找到就会正常引入
//除了可以在node_modules文件夹中放我们要引入的模块的 js之外，
//我们还可以放入一个我们要引入模块的名称的文件夹
//默认 nodejs帮我们选择它当中的 index.js
//如果想要改变必须设置我们的 package.json 这个配置文件，
//设置"main"属性为我们想要进入的 js文件的名称

console.log(module);
var school=require("school");
console.log(school.first);
school.third(10);
