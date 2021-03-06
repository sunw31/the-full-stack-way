# ECMAScript 6

ECMAScript 6 又称 ES6

## ES6 中的新特性

字符串，数组，及对象的新增 API：

- let 和 const 声明变量
- 模板字符串
- 解构
- 箭头函数
- 函数默认值和展开运算符
- 扩展的对象功能
- 类
- Symbol
- 迭代器与 for..of 循环
- 模块
- 四种数据结构：Map，Set，WeakMap，WeakSet
- Promise 对象

## ES6 的类与继承

当一个类初始化时，会自动调用构造函数 constructor() 类内部只能包含方法，而不能包含属性，因此我们需要在构造函数内部设置我们的属性。子类必须在 constructor 方法中调用 super 方法，否则新建实例时会报错。同时，类能让我们创建静态方法，而不能创建静态数据属性。

## Promise

### Promise 是什么

#### MDN 的描述

Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。

Promise 对象是一个代理对象（代理一个值），被代理的值在 Promise 对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的 promise 对象。

#### 理解

一个 Promise 对象代表一个目前还不可用，但是在未来的某个时间点可以被解析的值，它允许你以一种同步的方式编写异步代码。

#### Promise 的状态

一个 Promise 有以下几种状态:

- pending: 初始状态（未完成）。
- fulfilled: 意味着操作成功完成。
- rejected: 意味着操作失败。

Promise 对象可以由初始的 pending 状态转化成 fulfilled 或 rejected 状态，Promise 的状态一旦改变就不会再变，不能逆转，且只会由 pending 转化成 fulfilled 或由 pending 转化成 rejected。

状态转化时，Promise 对象的 then 方法绑定的处理方法（handlers ）就会被调用（then 方法包含两个参数：onfulfilled 和 onrejected，它们都是 Function 类型。当 Promise 状态为 fulfilled 时，调用 then 的 onfulfilled 方法，当 Promise 状态为 rejected 时，调用 then 的 onrejected 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争）。

以下称 fulfilled 状态为 resolved 状态。

### Promise 构造函数

我们可以通过 Promise 构造函数来生成 Promise 对象实例：

```JavaScript
var promise = new Promise(function(resolve, reject){
  // 异步操作成功
  if(success) {
    // 返回结果
    resolve(result);
  } else {
    // 异步操作失败，返回错误
    reject(error);
  }
});
```

Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve 和 reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。

resolve 函数的作用是，将 Promise 对象的状态从 “未完成” 变为 “成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。

reject 函数的作用是，将 Promise 对象的状态从 “未完成” 变为 “失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数并没有建立真正的端对端连接传递出去。

Promise 实例生成以后，可以用 then 方法分别指定 resolved 状态和 rejected 状态的回调函数。

```JavaScript
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

then 方法可以接受两个回调函数作为参数。第一个回调函数是 Promise 对象的状态变为 resolved 时调用，第二个回调函数是 Promise 对象的状态变为 rejected 时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受 Promise 对象传出的值作为参数。

then 方法返回的是一个新的 Promise 实例（注意，不是原来那个 Promise 实例）。因此可以采用链式写法，即 then 方法后面再调用另一个 then 方法。

更多关于 Promise 的内容请看参考 [Promise 对象](http://es6.ruanyifeng.com/#docs/promise)。

### 深入 Promise

[剖析 Promise 内部结构，一步一步实现一个完整的、能通过所有 Test case 的 Promise 类](https://github.com/xieranmaya/blog/issues/3)


- [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Promise 对象](http://es6.ruanyifeng.com/#docs/promise)
- [ES6-Promise 食用指南](https://zhuanlan.zhihu.com/p/33631918)

## Proxy

Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

```js
// 构造函数
// target 参数表示所要拦截的目标对象，handler 参数也是一个对象，用来定制拦截行为
let proxy = new Proxy(target, handler);
```

```js
let obj = new Proxy(
  {},
  {
    get: function(target, property) {
      return 35;
    }
  }
);

obj.time; // 35
obj.name; // 35
obj.title; // 35
```

### get

```js
var p = new Proxy(target, {
  get: function(target, property, receiver) {
  }
});
```

### set 

```js
var p = new Proxy(target, {
  set: function(target, property, value, receiver) {
  }
});
```

### 文章

- [Understanding ECMAScript 6](https://www.gitbook.com/book/oshotokill/understandinges6-simplified-chinese/details)（GitBook 可能需要翻墙翻墙）
- [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
- [ECMAScript 6 Features](https://github.com/lukehoban/es6features)
- [近一万字的ES6语法知识点补充](https://juejin.im/post/5c6234f16fb9a049a81fcca5?utm_source=gold_browser_extension#heading-34)
- [ES6、ES7、ES8、ES9、ES10新特性一览](https://juejin.im/post/5ca2e1935188254416288eb2#heading-32)
