var util=require("util");
function Parent(name) {
    this.name=name;
    this.play=function () {
        console.log(this.name+"play");
    }

}
Parent.prototype.say=function () {
    console.log(this.name);
}

function Child(name) {
    Parent.call(this,name);
}
Child.prototype.say=function () {
    console.log("hhhh");
}

var parent=new Parent("父级");
parent.say();
parent.play();
var child=new Child("子集");
util.inherits(Child,Parent);
child.play();
child.say();
console.log(util.inspect(chi))