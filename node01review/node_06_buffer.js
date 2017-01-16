

var buf1=new Buffer(9);
buf1.fill(255,0);
console.log(buf1);

var buf2=new Buffer([1,255,0xb3]);
console.log(buf2);

var buf3=new Buffer("库存");
console.log(buf3);

var buf4=new Buffer([0xe5, 0xba, 0x93, 0xe5]);
console.log(buf4.toString());

var buf5=new Buffer([0xad, 0x98]);
console.log(Buffer.concat([buf4,buf5]).toString());
//当 buf4，5不满足三个进制合成一个文字时使用
var StringDecoder=require("string_decoder").StringDecoder;
var decoder=new StringDecoder();
console.log(decoder.write(buf4));
console.log(decoder.write(buf5));