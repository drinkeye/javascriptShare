function A(n, m) {
    this.n = n;
    this.m = m;
}
A.prototype = {
    constructor: A,
    sum: function () {
        console.log(this.n + this.m);
    }
};
// var a = new A(10, 20);
// a.sum();

function B(n, m) {
    this.n = n;
    this.m = m;
}
B.prototype = new A();//->JS中的原型继承
var b = new B(100, 200);
b.sum();