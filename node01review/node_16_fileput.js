var http=require('http');
var fs=require('fs');
var url=require('url');
var formidable=require('formidable');

http.createServer(function (req,res) {
    var urlObj=url.parse(req.url,true);
    if(urlObj.pathname=="/load"){
        var form=new formidable.IncomingForm();
        form.parse(req,function (err,params,files) {
            console.log(err);
            console.log(params);
            console.log(files);
            fs.createReadStream(files.img.path).pipe(fs.createWriteStream("kk.jpg"));
            res.end("成功");
        })
    }else {
        if(urlObj.pathname!="/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
}).listen(8082);