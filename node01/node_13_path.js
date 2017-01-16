var path=require('path');
console.log(path.normalize('./../a///b/c/.././d//'));
//找到当前文件所在文件夹的绝对路径
console.log(__dirname);
console.log(path.join(__dirname,"a","b","..","c"));
console.log(path.resolve("./test/index.html")); 
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')); 
console.log(path.resolve('../7.fs/img.js'));