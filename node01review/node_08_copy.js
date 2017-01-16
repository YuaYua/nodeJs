var fs=require('fs');
function copy(src,dest) {
    fs.readFile(src,"utf8",function (err,data) {
        if(err){
            console.log("读取失败");
        }else {
            fs.writeFile(dest,data,{
                flag:"w"
            },function (err) {
                if(err){
                    console.log("拷贝失败");
                }else {
                    console.log("拷贝成功");
                }
            })
        }
    })
}
copy("test.txt","tt.txt");