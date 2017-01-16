var fs=require("fs");
// fs.mkdir("dir",0777,function (err) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("创建成功");
//     }
// })
// fs.readdir("../node01",function (err,content) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(content);
//     }
// })

// fs.stat("../node_modules",function (err,stat) {
//     if (err) {
//         console.log(err);
//     }else {
//         console.log(stat);
//     }
// })

// fs.exists("dir",function (result) {
//     if(result){
//         console.log("文件存在");
//     }else {
//         console.log("文件不存在");
//     }
// })

// fs.realpath("dir",function (err,path) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(path);
//     }
// })

fs.rename("1.txt","haha.txt",function (err) {
    if(err){
        console.log(err);
    }
})