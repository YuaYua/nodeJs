var fs=require('fs');
//写入文件
// fs.writeFile("test.txt","-writeFile",{
//     flag:"a"
// },function (err) {
//     if(err){
//         console.log("写入失败");
//     }else {
//         console.log("写入成功");
//         var dataStr=fs.readFileSync("test.txt","utf8");
//         console.log(dataStr);
//     }
// })

fs.appendFile("test.txt","-appendFile",function (err) {
    if(err){
        console.log(err);
    }else {
        var data=fs.readFileSync("test.txt","utf8");
        console.log(data);
    }
})