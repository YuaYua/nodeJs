var http = require('http');
var url=require('url');

var server = http.createServer(function (req,res) {
    //req请求头（request）:是浏览器给后台发送请求的所有内容
    //res 响应头（response）：是服务器接收到请求后经过处理要返回相应信息给浏览器的内容

    console.log(req.url);
    var urlObj=url.parse(req.url,true);
    console.log(urlObj.pathname);
    console.log(urlObj.query.us);

    //write方法帮我们向浏览器传递我们想要编写的内容
    res.write("<h1>hhhh</h1>");
    //end 方法帮我们告诉浏览器我的相应头结束了
    //我想要传递的信息都 OK ，你可以停止接收了
    res.end("hello,world!");
})

server.listen(8080);
