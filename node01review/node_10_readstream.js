var fs=require('fs');
var rs=fs.createReadStream("th.txt");
var times=0;
var str="";
rs.on('data',function (data) {
    times++;
    str+=data.toString();
    console.log(data.toString());
})
rs.on('end',function () {
    console.log(times);
    console.log("读取完成");
})