var fs=require('fs');
//创建目录
// fs.mkdir("dir",0777,function (err) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("创建成功");
//     }
// })
//读取目录
// fs.readdir("../node01review",function (err,content) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(content);
//     }
// })
//查看文件或目录详情
// fs.stat("../node01review",function (err,stat) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(stat);
//     }
// })

//查看文件是否存在
// fs.exists("dir",function (result) {
//     if(result){
//         console.log("文件存在");
//     }else {
//         console.log("文件不存在");
//     }
// })
//相对路径获取绝对路径
// fs.realpath("dir",function (err,path) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(path);
//     }
// })
//重命名
// fs.rename("tt.txt","th.txt",function (err){
//     if(err){
//         console.log(err);
//     }
// })