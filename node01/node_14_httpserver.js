var http=require('http');
var url=require('url');
var fs=require('fs');

var username="lck";
var password="111";
http.createServer(function (req,res) {
    // console.log(req.url);
    // console.log(rceq.method);
    var urlObj=url.parse(req.url,true);
    console.log(urlObj.pathname);
    if(urlObj.pathname=="/login"){
        if(urlObj.query.username==username && urlObj.query.pass==password){
            res.end("hello");
        }else {
            res.end("fail");
        }
    }else if (urlObj.pathname=="/reg"){

    }
    else {
        if (urlObj.pathname!="/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
}).listen("8080");