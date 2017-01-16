var path=require('path');
//规范化字符串路径
console.log(path.normalize('./../a///b/c/.././d//'));
//找当前文件所在文件夹的绝对路径
console.log(__dirname);
console.log(path.join(__dirname,"a","b","..","c"));
console.log(path.resolve("./test/index.html"));
