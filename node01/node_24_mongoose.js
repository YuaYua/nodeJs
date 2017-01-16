var mongoose=require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/user");
db.connection.on("error", function (error) {
   console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
	console.log("数据库连接成功");
});

var PersonSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    gender:{type:String}
},{
    collection:'child'
});

var Model = db.model("child",PersonSchema);

var doc={
    name:"lck",
    age:20
}
//添加语句
// Model.create(doc,function (err,doc) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(doc);
//     }
// })
//查询
//骨架有什么才可以输出什么
// Model.find({},function (err,docs) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(docs);
//         console.log(docs[0].gender);
//     }
// })

//更新
// Model.update({"name":"lck"},{$set:{"name":"ck"}},function (err) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("更新成功");
//     }
// })

//删除
Model.remove({"name":"lck"},function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("删除成功");
    }
})