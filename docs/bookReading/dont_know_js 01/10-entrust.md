## es6中的class
除了语法更好看之外，ES6 还解决了什么问题呢?
1. (基本上，下面会详细介绍)不再引用杂乱的 .prototype 了。
2. Button声明时直接“继承”了Widget，不再需要通过Object.create(..)来替
换 .prototype 对象，也不需要设置 .__proto__ 或者 Object.setPrototypeOf(..)。
3. 可以通过super(..)来实现相对多态，这样任何方法都可以引用原型链上层的同名方 法。这可以解决第 4 章提到过的那个问题:构造函数不属于类，所以无法互相引用——
super() 可以完美解决构造函数的问题。
4. class 字面语法不能声明属性(只能声明方法)。看起来这是一种限制，但是它会排除
掉许多不好的情况，如果没有这种限制的话，原型链末端的“实例”可能会意外地获取 其他地方的属性(这些属性隐式被所有“实例”所“共享”)。所以，class 语法实际上 可以帮助你避免犯错。
5. 可以通过extends很自然地扩展对象(子)类型，甚至是内置的对象(子)类型，比如 Array 或 RegExp。没有 class ..extends 语法时，想实现这一点是非常困难的，基本上 只有框架的作者才能搞清楚这一点。但是现在可以轻而易举地做到!

## class陷阱
class 基本上只是现有 [[Prototype]](委托!)机制的一种语法糖。
```js
class C { 
    constructor() {
        this.num = Math.random(); 
    }
    rand() {
        console.log( "Random: " + this.num );
    } 
}
var c1 = new C();
c1.rand(); // "Random: 0.4324299..."
C.prototype.rand = function() {
console.log( "Random: " + Math.round( this.num * 1000 ));
};
var c2 = new C(); c2.rand(); // "Random: 867"
c1.rand(); // "Random: 432" ——噢!
```
