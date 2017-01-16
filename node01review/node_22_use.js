var express=require('express');
var app=express();
app.use("/reg",function (req,res,next) {
    var str="";
    if(req.query.name!='lck'){
        str="用户有误";
    }
    next(str);
})
app.use("/reg",function (req,res,next) {
    var str="";
    if(req.query.password!=111){
        str="密码有误";
    }
    next(str);
})

app.use("/reg",function (req,res,next) {
    var str="";
    if(req.query.age>200){
        str="年龄有误";
    }
    next(str);
})
app.use("/reg",function (err,req,res,next) {
    console.log(err);
    res.send(err);
})
app.get("/reg",function (req,res) {
    console.log("注册成功");
    res.send("注册成功");
})
app.get("/",function (req,res) {
    res.send('到我这里')
})
app.get("*",function (req,res) {
    if (req.path!="/favicon.ico"){
        res.sendFile(__dirname+req.path);
    }
})
app.listen(9988);