var http=require('http');
var options={
    host: 'localhost',
    port: '8888',
    path: '/reg?user=lck&password=123',
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
};
var request=http.request(options,function (res) {
    console.log(res);
    res.on('data',function (data) {
        console.log(data.toString());
    })
    res.on('end',function () {
        console.log("haha")
    })
})
request.end()
