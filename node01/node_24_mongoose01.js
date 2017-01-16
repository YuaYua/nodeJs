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

// Model.findById("5878872c6c7942b0024d7e8b",function (err,doc) {
//     console.log(doc)
// })

// Model.find({"age":{$ne:17}},function (err,docs) {
//     console.log(docs);
// })

var obj= {
    "name":/g/,
    $or:[
        {"age":{$gte:555}},
        {"gender":"women"}
    ]
}


// Model.find(obj,function (err,docs) {
//     console.log(docs);78
// })

// Model.find({"__v":{$exists:false}},function (err,docs) {
//     console.log(docs);
// })

Model.find({},{},{limit:3,skip:3,sort:{age:1,name:-1}},function (err,docs) {
    console.log(docs)
})