var mongoose=require("mongoose");
var db=mongoose.connect("mongodb://127.0.0.1:27017/user");
db.connection.on('error', function (error) {
 	    console.log('数据库连接失败：' + error);
});
db.connection.on('open', function () {
   console.log('数据库连接成功');
});

var PersonSchema=new mongoose.Schema({
    name : { type:String }, 
    age  : { type:Number, default:0 }
},{
    collection:'child'
})

var Model=db.model("child",PersonSchema);

// Model.create({name:"zhangsan",age:15},function (err,doc) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(doc)
//     }
// })

// Model.find({},function (err,docs) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(docs);
//     }
// })

// Model.find({age:20},{name:1,_id:0},function (err,docs) {
//     if(err){
//         console.log(err);
//     }else
//     {
//         console.log(docs)
//     }
// })

// Model.findOne({age:20},function (err,doc) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(doc)
//     }
// })

// Model.findById("5878d5e32d785706bedd9a0f",function (err,doc) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(doc)
//     }
// })

// Model.update({name:"zhangsan"},{$set:{name:"san"}},function (err) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("更新成功");
//     }
//
// })

Model.remove({name:"san"},function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("删除成功");
    }
})