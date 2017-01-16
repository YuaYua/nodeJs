/**
 * Created by lanou on 17/1/12.
 */
var http=require('http');
var formidable=require('formidable');
var url=require('url');
var fs=require('fs');
http.createServer(function (req,res) {
    var urlObj=url.parse(req.url,true);
    if(urlObj.pathname=="/load"){
        var form=new formidable.IncomingForm();
        form.parse(req,function (err,params,files) {
            //要有 img文件夹
            fs.exists("img/"+params.name,function (exists) {
                if(!exists){
                    fs.mkdir("img/"+params.name,0777,function () {
                        console.log("创建成功");
                    })
                }
                fs.createReadStream(files.img.path).pipe(fs.createWriteStream("img/"+params.name+"/"+files.img.name));
                res.write("<h1>上传成功</h1>");
                res.end("<img src='"+"img/"+params.name+"/"+files.img.name+"'>");
            })
        })
    }else {
        if(urlObj.pathname!="/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
}).listen(8088);