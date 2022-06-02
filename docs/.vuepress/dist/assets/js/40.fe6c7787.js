(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{446:function(s,t,a){"use strict";a.r(t);var e=a(23),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"node模块化理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node模块化理解"}},[s._v("#")]),s._v(" Node模块化理解")]),s._v(" "),a("p",[s._v("Node.js采用的是CommonJs规范，在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。\n在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。")]),s._v(" "),a("blockquote",[a("p",[s._v("Node.js中模块的分类：")])]),s._v(" "),a("ul",[a("li",[s._v("核心模块（已经封装好的内置模块")]),s._v(" "),a("li",[s._v("自己定义的模块")]),s._v(" "),a("li",[s._v("第三方的模块（npm下载下来的")])]),s._v(" "),a("h3",{attrs:{id:"require"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[s._v("#")]),s._v(" require")]),s._v(" "),a("p",[s._v('require函数用来在一个模块中引入另外一个模块。传入一个模块名，返回一个模块导出对象。用法：let cc = require("模块名") ，其中模块名可以用绝对路径也可以用相对路径,模块的后缀名.js可以省略。例如：')]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cc1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cc2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'home/src/main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cc3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./main'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("require()函数用两个作用：")]),s._v(" "),a("ul",[a("li",[s._v("执行导入的模块中的代码；")]),s._v(" "),a("li",[s._v("返回导入模块中的接口对象；")])]),s._v(" "),a("h3",{attrs:{id:"exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports"}},[s._v("#")]),s._v(" exports")]),s._v(" "),a("p",[s._v("exports对象用来导出当前模块的公共方法或属性，别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象。用法：exports.name,name为导出的对象名。例子：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n​\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 导出一个add方法供其他模块使用")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("其实exports类似于ES6中的export的用法，用来导出一个指定名字的对象")])]),s._v(" "),a("h3",{attrs:{id:"module-exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-exports"}},[s._v("#")]),s._v(" module.exports")]),s._v(" "),a("p",[s._v("module.exports用来导出一个默认对象，没有指定对象名，常见于修改模块的原始导出对象。比如原本模块导出的是一个对象，我们可以通过module.exports修改为导出一个函数。如下：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"模块初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块初始化"}},[s._v("#")]),s._v(" 模块初始化")]),s._v(" "),a("p",[s._v("一个模块中的JS代码仅在模块第一次被使用时执行一次，并且在使用的过程中进行初始化，之后缓存起来便于后续继续使用")]),s._v(" "),a("h3",{attrs:{id:"主模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主模块"}},[s._v("#")]),s._v(" 主模块")]),s._v(" "),a("p",[s._v("通过命令行参数传递给NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。例如通过以下命令启动程序时，main.js就是主模块")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("$ node main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行main.js启动程序，main.js称为主模块")]),s._v("\n")])])]),a("h2",{attrs:{id:"node中exports-和-module-exports的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node中exports-和-module-exports的区别"}},[s._v("#")]),s._v(" Node中exports 和 module.exports的区别")]),s._v(" "),a("p",[s._v("Node中，每个模块都有一个exports接口对象，我们需要把公共的方法或者字符串挂载在这个接口对象中，其他的模块才可以使用。")]),s._v(" "),a("blockquote",[a("p",[s._v("Node.js中只有模块作用域，默认两个模块之间的变量，方法互不冲突，互不影响，这样就导致一个问题，我们怎样使用加载进来的模块中的方法呢？这就需要在另外一个模块exports接口对象中挂载模块中公共的方法。")])]),s._v(" "),a("h3",{attrs:{id:"exports-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports-2"}},[s._v("#")]),s._v(" exports")]),s._v(" "),a("p",[s._v("我们在a.js中有以下代码：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("y\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" add "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在接口对象中挂载公共的add方法")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在接口对象中挂载foo属性")]),s._v("\n")])])]),a("p",[s._v("此时，在b.js中如果需要使用add方法,只需引入a.js即可。b.js代码如下")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./a.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a.js和b.js在同级目录下，注意：同级目录必须加“./”")]),s._v("\n​\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用a.js中的add方法")]),s._v("\n")])])]),a("h3",{attrs:{id:"module-exports-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-exports-2"}},[s._v("#")]),s._v(" module.exports")]),s._v(" "),a("p",[s._v("对于1中的例子，我们同样可以利用module.exports来写，只需把暴露的方式改成如下：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("add "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" add  \n​\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" foo\n")])])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ol",[a("li",[s._v("Node中每个模块都有一个module对象，module对象中的有一个exports属性为一个接口对象，我们需要把模块之间公共的方法或属性挂载在这个接口对象中，方便其他的模块使用这些公共的方法或属性。")]),s._v(" "),a("li",[s._v("Node中每个模块的最后，都会return: module.exports。")]),s._v(" "),a("li",[s._v("Node中每个模块都会把module.exports指向的对象赋值给一个变量exports，也就是说：exports = module.exports。")]),s._v(" "),a("li",[s._v("module.exports = XXX，表示当前模块导出一个单一成员，结果就是XXX。")]),s._v(" "),a("li",[s._v("如果需要导出多个成员时必须使用exports.add = XXX; exports.foo = XXX;或者使用module.exports.add = XXX; module.export.foo = XXX;。")])]),s._v(" "),a("h2",{attrs:{id:"node中加载第三方包的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node中加载第三方包的规则"}},[s._v("#")]),s._v(" Node中加载第三方包的规则")]),s._v(" "),a("p",[s._v("Node.js中使用CommonJs模块化机制，通过npm下载的第三方包，我们在项目中引入第三方包都是：let xx = require('第三方包名')，究竟require方法加载第三方包的原理机制是什么，今天我们来探讨下。‘")]),s._v(" "),a("ol",[a("li",[s._v("require('第三方包名')优先在加载该包的模块的同级目录node_modules中查找第三方包。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" template "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'art-template'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//加载第三方包")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("找到该第三方包中的package.json文件，并且找到里面的main属性对应的入口模块，该入口模块即为加载的第三方模块。")])]),s._v(" "),a("li",[a("p",[s._v("如果在要加载的第三方包中没有找到package.json文件或者是package.json文件中没有main属性，则默认加载第三方包中的index.js文件。")])]),s._v(" "),a("li",[a("p",[s._v("如果在加载第三方模块的文件的同级目录没有找到node_modules文件夹，或者以上所有情况都没有找到，则会向上一级父级目录下查找node_modules文件夹，查找规则如上一致。")])]),s._v(" "),a("li",[a("p",[s._v("如果一直找到该模块的磁盘根路径都没有找到，则会报错：can not find module xxx。")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);