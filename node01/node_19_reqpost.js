var http=require('http');

var options = {
    host: 'localhost',
    port: '8080',
    path: '/post',
    method:'post',
    headers:{
        'Content-Type':'application/json'
    }
};
var request=http.request(options,function (res) {
    console.log(res);

})
request.write('{"user":"lck","password":123}');
request.end();