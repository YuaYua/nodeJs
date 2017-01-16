var fs=require('fs');
var ws=fs.createWriteStream("haha.txt");
ws.wrtie(new Buffer(64*1024),function (what) {
    console.log(what);
    console.log("写入成功")
})
