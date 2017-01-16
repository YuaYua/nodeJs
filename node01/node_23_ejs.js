/**
 * Created by lanou on 17/1/12.
 */
var express=require('express');
var app=express();
app.set("view engine","ejs");
app.set("views",__dirname);

app.get("/",function (req,res) {
    res.render("index",{
        name:'lck',
        age:17,
        user:{
            name:'wukong',
            age:'588',
            power:'999',
            gender:'man'
        },
        list:[
            1,2,3,4
        ]
    });
})

app.listen(8899);
