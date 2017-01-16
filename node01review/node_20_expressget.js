var express=require('express');
var app=express();
app.get("/list",function (req,res) {
    res.send("haha");
})
//路径提交方式 localhost:8099
app.get("/params/:name/:password",function (req,res) {
    console.log(req.params);
    res.send("params");
})
app.get("/",function (req,res) {
    res.sendFile(__dirname+"/html/node_20_express.html");
})
//在 node_20_express.html中我们请求了 css/index.css
//而上面的路径没有处理跳转到这个文件的
//使用"*"(任意路径)来处理跳转
//注意"*"要放在最后一条 get
//防止对其他逻辑处理产生影响
app.get("*",function (req,res) {
    console.log(req.path);
    console.log(__dirname+req.path);
    res.sendFile(__dirname+req.path);
})
app.listen(8099);