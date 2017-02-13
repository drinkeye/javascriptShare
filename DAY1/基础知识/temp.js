//-> number、string、boolean、object、function  null undefined
/*var num = 12;//->JS是弱类型语言,相对JAVA来说比较松散
 var obj = {
 name: "珠峰培训"
 };
 function fn() {
 }
 var ary = [1, 2, 3];
 console.log(typeof fn);//->输出检测num变量数据类型的结果*/

/*
 * 预解释
 * var num;  在预解释的时候仅仅是声明,没有定义
 * function fn(){1}  在预解释的时候，声明和定义都做了
 */

/*
 console.log(num);//->undefined 未定义
 var num = 12;

 fn();
 function fn() {
 console.log('hello world');
 }
 */

/*var num1 = 12;
 var num2 = num1;
 num2 = 13;
 console.log(num1);

 var obj1 = {name: '珠峰'};
 var obj2 = obj1;
 obj2.name = "软件学院";
 console.log(obj1.name);

 obj1 = null;
 obj2 = null;*/
//->此时堆内存不被外界任何的东西占用，浏览器在空闲的时候，会把这些未被占用的堆内存进行释放

/*
 * null undefined 没有
 * - null 空
 * - undefined 未定义
 * 郭靖的女盆友是null  男盆友是undefined
 */

/*
var n = 10;
var obj = {
    n: 12,
    fn: (function () {
        this.n++;
        var n = 13;
        return function () {
            this.n++;
            n++;
            console.log(n);
        }
    })()//->执行函数
};
var fn = obj.fn;
fn();//->this => window
obj.fn();//->this => obj
console.log(obj.n, n);
*/

/*function sum(n, m) {
 console.log(n + m);
 return {
 name: '珠峰'
 }
 }
 var obj=sum(1, 2);*/

//

















