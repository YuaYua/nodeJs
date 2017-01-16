var express=require('express');
var app=express();
app.use(function (req,res,next) {
    req.money=100;
    next();
})
//当 next()中传了一个不为 null的参数，说明有错，会终止其他中间件并进入
//错误处理中间件
app.use(function (req,res,next) {
    req.money-=20;
    console.log(req.money);
    next();
})
app.use(function (req,res,next) {
    req.money-=50;
    console.log(req.money);
    next("扣钱");
});
app.use(function (err,req,res,next) {
    console.log(err);
    res.end(err);
})
app.listen(9999);
