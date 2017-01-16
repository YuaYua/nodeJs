var StringDecoder = require("string_decoder").StringDecoder; 
var decoder = new StringDecoder();

var buf1=new Buffer(9);
buf1.fill(255,0)
console.log(buf1);

var buf2=new Buffer([1,255,0xb3]);
console.log(buf2);

var buf3=new Buffer("刘长江");
console.log(buf3);

var buf4=new Buffer([0xe5 ,0x88 ,0x98 ,0xe9 ,0x95 ,0xbf]);
console.log(buf4);
console.log(buf4.toString());

var buf5=new Buffer([0xe6 ,0xb1 ,0x9f]);
console.log(Buffer.concat([buf4,buf5]).toString());
console.log(decoder.write(buf4));
console.log(decoder.write(buf5));