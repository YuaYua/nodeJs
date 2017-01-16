var events=require('events');
var util=require('util');

function Dashen() {

}

util.inherits(Dashen,events);

function Cai(fn) {
    this.say=fn
}

var dashen=new Dashen();
var cai1=new Cai(function () {
    console.log("带带我");
})
var cai2=new Cai(function () {
    console.log("cai2");
})
var cai3=new Cai(function () {
    console.log("cai3");
})

dashen.on("play",cai1.say);

dashen.addListener("play",cai2.say);
//dashen.setMaxListeners(1);
dashen.once("play",cai3.say);
//dashen.removeListener("play",cai3.say);
dashen.removeAllListeners("play");
console.log("111");
dashen.emit("play");
dashen.emit("play");
console.log("haha");