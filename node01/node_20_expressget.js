var express=require('express');
var app=express();

app.get("/list",function (req,res) {

    console.log(req.host);
    console.log(req.path);
    console.log(req.query);
    console.log(req.params);
    res.send("haha");
})
app.get("/params/:name/:password",function (req,res) {
    console.log(req.params);
})
app.get("/",function (req,res) {
    res.sendFile(__dirname+"/html/node_20_express.html");
});
//如果要在路径中使用"*"就要放在最后
//防止对我们的其他逻辑处理产生影响
app.get("*",function (req,res) {
    console.log(req.path);
    console.log(__dirname+req.path);
    res.sendFile(__dirname+req.path);
})
app.listen(8099);