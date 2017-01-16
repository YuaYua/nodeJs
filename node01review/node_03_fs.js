var fs=require("fs");
//readFileSync:同步获取文件内容
var data=fs.readFileSync("test.txt","utf8");
console.log(data);
//readFile:异步获取文件内容
var data1=fs.readFile("test.txt","utf8",function (err,data) {
    if(err){
        console.log("读取失败");
    }else {
        console.log(data);
    }
})