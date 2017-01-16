var util=require("util");
function Person(name) {
    this.name=name
}
function Child(name) {
    Person.call(this,name);
}

Person.prototype.say=function () {
    console.log(this.name);
}


Child.prototype.say=function () {
    console.log("hahahah");
}
util.inherits(Child,Person);
var person=new Person("tangseng");
person.say();
var child=new Child("lck");
child.say();
console.log(util.inspect(child));
console.log(util.isArray([]));