/*var a = 12;
 console.log(window.a);*/

/*let a = 12;
 console.log(window.a);//->undefined*/

//->let不可以重复定义
/*
 let a = 12;
 let a = 13;
 console.log(a);*/

//->在ES5中判断和循环没有块级作用域
/*
 for (var i = 0; i < 10; i++) {
 //console.log(i);
 }
 console.log(i);

 if (1) {
 var b = 13;
 }
 console.log(b);
 */

//->在ES6中判断和循环有块级作用域
/*for (let i = 0; i < 10; i++) {

 }
 console.log(i);*///->Uncaught ReferenceError: i is not defined(…)

//->const：定义常量,常量这个值是不能改变的
//const a = 12;
//a = 13;//->Uncaught TypeError: Assignment to constant variable.

//----------------------------------------------
/*函数*/
// function fn(a, b) {
//     console.log(a + b);
//     return a+b;
// }
// var fn = function (a, b) {
//     console.log(a + b);
// };
// fn();

// let fn = (a, b)=>console.log(a + b);
// let fn = (a, b)=>a + b;
// let num = fn(10, 20);
// console.log(num);

// let fn = a=>console.log(a);
// fn(10);

// let fn = ()=> {
//     console.log('ok');
//     console.log('no');
// };

/*--对于过多的参数，我们可以使用拓展运算符来操作了--*/
// function fn() {
//     console.log(arguments[0]);
//     console.log([].shift.call(arguments));//->让arguments这个类数组借用数组原型上的方法实现把第一项删除掉
//     console.log(arguments);
// }
// fn(1, 2, 3, 4);

// let fn = (a, ...key)=> {
//     console.log(a);
//     console.log(key);
// };
// fn(1, 2, 3, 4, 5, 6);

/*--箭头函数没有自己的上下文(this),它的上下文是继承父级作用域的--*/
// var obj = {
//     a: 12,
//     fn: function () {
//         //->this:obj
//
//         // function f() {
//         //     console.log(this.a);//->undefined this=>window ES5找this:看函数执行前面是否有.,有的话.前面是谁this就是谁,没有的话this就是window
//         // }
//         // f();
//
//
//         // var that = this;
//         // function f() {
//         //     console.log(that.a);//->12
//         // }
//         // f();
//
//         // function f() {
//         //     console.log(this.a);//->12
//         // }
//         // f.call(this);//->使用call和apply改变this
//
//         // let f = ()=> {
//         //     console.log(this.a);//->12
//         // };
//         // f();
//     }
// };
// obj.fn();

// let obj = {
//     n: 0,
//     fn: function () {
//         //this->obj
//         // window.setInterval(function () {
//         //     //this->window
//         //     this.n++;
//         //     console.log(this.n);
//         // },1000);
//
//         window.setInterval(()=> {
//             console.log(++this.n);
//         }, 1000);
//     }
// };
// obj.fn();

// function fn(a, b) {
//     console.log(a + b);//->10+undefined=NaN
// }
// fn(10);

// function fn(a, b) {
//     typeof b === 'undefined' ? b = 0 : null;
//     //b = b || 0;
//     console.log(a + b);//->10
// }
// fn(10);

/*--可以给参数设定默认值了--*/
// let fn = (a = 0, b = 0)=>console.log(a + b);
// fn(10);


//---------------------------------------------------
/*解构赋值*/
//let ary = ['鼠', '牛', '虎', '兔'];
//let a = ary[1];

//let [a,b]=ary;
//let [a,...key]=ary;


// let ary = ['鼠', '牛', ['虎', '兔']];
// let [,,[,a]]=ary;

// let obj = {
//     a: 12,
//     b: ['鼠', '牛', ['虎', '兔']],
//     c(){
//
//     }
// };

//let {a, b, fn}=obj;//->obj.fn => undefined

//let {a, b, c:fn}=obj;

//let {a, b:[,,[,k]], c}=obj;

//--------------------------------------------
/*类继承*/
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;//->当前实例的私有属性
//     }
//
//     //->公有的属性和方法 ES5定义在原型上的
//     fn() {
//         console.log(fn);
//     }
//
//     sum() {
//         console.log(this.name);
//     }
// }
// var p1 = new Person('张三', 18);
// p1.sum();
//
// class Man extends Person {
//     constructor(name, age) {
//         super(name, age); //->Person.prototype.constructor.call(this, name,age) && Person.call(this,name,age)
//         this.sex = '男';
//     }
//
//     money() {
//         console.log('男人就是要赚钱养家的!');
//     }
// }
// var m1 = new Man('李四', 26);

//----------------------------------------------
/*模板字符串*/
let name = '珠峰',
    age = 8,
    temp = `${name} is ${age} years old.`;//->不是单引号，键盘TAB键上边的那个键

//var temp = name + ' is ' + age + ' years old.';








