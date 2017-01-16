var http=require('http');
var url=require('url');
var fs=require('fs');

var server=http.createServer(function (req,res) {
    console.log(req.url);
    var urlObj=url.parse(req.url,true);
    //req.method属性得到的是大写单词
    //所以如果要进行判断要么直接大写
    //要么转换成想要的大小写类型再进行判断
    if(req.method=="POST"){
        if(urlObj.pathname=="/reg"){
            // console.log(urlObj);
            var str="";
            req.on('data',function (data) {
                str+=data.toString();

                console.log(data.toString());
            })
            req.on('end',function () {
                var obj=url.parse("?"+str,true).query;
                var address="";
                if(obj.name=="lck"&&obj.password=="111"){
                    address="html/success.html";
                }else {
                    address="html/post_15_post.html";
                }
                fs.createReadStream(address).pipe(res);
            })
            // res.end("结束了");
        }
    }else {
        if (urlObj.pathname!="/favicon.ico"){
            fs.createReadStream("."+urlObj.pathname).pipe(res);
        }
    }
    //res.end("hooooo");
})
server.listen(8080);