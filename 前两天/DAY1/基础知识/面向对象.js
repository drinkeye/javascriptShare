//JS中的类其实就是一个普通的函数
// fn() =>函数执行(闭包)
// new fn() =>类(fn) 返回的结果就是当前类的实例

/*
 function Fn() {

 }
 new Fn();*/

function Person(name, age) {
    //this -> 当前的实例
    this.name = name;
    this.age = age;
    this.fn = function () {

    };
    //->这里的name和age都是实例的私有属性，fn也是每一个实例私有的
}
//->Person.prototype：原型,这上面定义的属性和方法都是实例之间共用的属性方法
Person.prototype.sum = function () {

};
var p1 = new Person('张三', 28);//->p1 实例
var p2 = new Person('李四', 82);//->p2 实例
console.log(p1.fn === p2.fn);//->false
console.log(p1.sum === p2.sum);//->true

//JS中类的原型指向属性,通过这个属性可以构建原型链
//__proto__
p1.fn();
p1.sum();//->先在私有当中找,没有在找共有的
p1.__proto__.sum();//->直接找共有的
p1.hasOwnProperty();


//->JS中没有类似于JAVA中的重载的(也有的业内人士人为,只要做了传递不同参数做不同处理的话就可以人为是重载)
/*function sum(n, m) {
    console.log(1);
}
function sum(n) {
    arguments.length >= 2 ? console.log('ok') : console.log('no');
    //console.log(2);
}
sum(10);//->2
sum(10, 20);//->2*/



