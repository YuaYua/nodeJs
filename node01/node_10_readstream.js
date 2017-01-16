var fs=require('fs');
var rs=fs.createReadStream("haha.txt");
var times=0;
var str="";
//通过注册读取流的 data 事件并设置观察者来获取
//我们一次读取到的数据64kb大小
//当文件大时会多次执行直到文件读取结束为止
//读取出的内容是 buffer 类型的
rs.on('data',function (data) {
    times++;
    str+=data.toString();
    console.log(data.toString());
})
//end事件是我们文件读取完成时会执行一次的方法
//比如我们多次获取出来的数据如果做了保存在我们的
// end 方法中就是合适的输出时机了，因为此数据已经都读取完毕了

rs.on('end',function () {
    console.log(times);
    console.log('度午安还曾');
})