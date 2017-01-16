var http=require('http');
var url=require('url');
var fs=require('fs');
var server=http.createServer(function (req,res) {
    var urlObj=url.parse(req.url,true);
    if(req.method=="POST"){
        if(urlObj.pathname=="/reg"){
            var str="";
            req.on("data",function (data) {
                str+=data.toString();
                console.log(data.toString());
            })
            req.on('end',function () {
                var obj=url.parse("?"+str,true).query;
                var address="";
                if(obj.name=="lck" && obj.password==111){
                    address="html/success.html";
                }else {
                    address="html/post_15_httpPost.html";
                }
                fs.createReadStream(address).pipe(res);
            })
        }
    }else {
        if(urlObj.pathname!="/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
})
server.listen(8082);