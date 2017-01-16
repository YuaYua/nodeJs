var events=require("events");
var util=require("util");
function Dashen() {
    
}
//想让一个类拥有events方法就要先继承events模块
util.inherits(Dashen,events);
function Cai(fn) {
    this.say=fn;
}
var dashen=new Dashen();
var cai1=new Cai(function () {
    console.log("cai1");
})
var cai2=new Cai(function () {
    console.log("cai2");
})
var cai3=new Cai(function () {
    console.log("cai3");
})
dashen.setMaxListeners(5);
dashen.on("play",cai1.say);
// dashen.removeListener("play",cai1.say);
dashen.addListener("play",cai2.say);

dashen.once("play",cai3.say);
dashen.removeAllListeners("play");
dashen.emit("play");
dashen.emit("play");