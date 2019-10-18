// call函数实现
// Function.prototype.myCall2=function(context){
 
//     context=context||window; //兼容传入null的情况
//     console.log(this)
//     context.fn=this;//将原函数添加到目标对象属性上
//     var newArguments = [];
//     for(var i = 1, len = arguments.length; i < len; i++) {
//         console.log('arguments['+ i + ']')
//         newArguments.push('arguments[' + i + ']');
//     }
//     eval('context.fn('+newArguments+')'); //执行属性方法
//     delete context.fn; //去除属性
// }

// var myobj={name:'peachestao'};
// function fn(param){
//     console.log(this.name);
//     console.log(param);
// }
// fn.myCall2(myobj, 'hello')

// 判断img是否加载完毕
// var count = 0
// var interval = 50
// var pics = document.getElementsByClassName('pics')
// for(var i = 0;i < pics.length;i++) {
//     pics[i].onload = function() {
//         count++
//         console.log(`${this.id}`+ 'is loaded')
//     }
// }

// function queryload(callback) {
//     if(count < pics.length) {
//         console.log('loaded' + count + 'pic')
//         setTimeout(queryload, interval, callback)
//     }else {
//         console.log('all loaded')
//         callback()
//     }
// }


// 组合继承
// function Person(name) {
//     this.name = name
//     this.sum = function() {
//         alert(this.name)
//     }
//     this.fullname = 'wln'
// }
// Person.prototype.age = 12

// function content(obj) {
//     function F(){}
//     F.prototype = obj
//     return new F()
// }
// function Child() {
//     Person.call(this)
// }
// var con = content(Person.prototype)
// Child.prototype = con
// con.constructor = Child
// var sub1 = new Child()
// console.log(sub1.age)

//es6继承
// class Animal {
//     //构造函数，里面写上对象的属性
//     constructor(props) {
//         this.name = props.name || 'Unknown';
//     }
//     //方法写在后面
//     eat() {//父类共有的方法
//         console.log(this.name + " will eat pests.");
//     }
// }

// //class继承
// class Bird extends Animal {
//     //构造函数
//     constructor(props,myAttribute) {//props是继承过来的属性，myAttribute是自己的属性
//         //调用实现父类的构造函数
//         super(props)//相当于获得父类的this指向
//         this.type = props.type || "Unknown";//父类的属性，也可写在父类中
//         this.attr = myAttribute;//自己的私有属性
//     }

//     fly() {//自己私有的方法
//         console.log(this.name + " are friendly to people.");
//     }
//     myattr() {//自己私有的方法
//         console.log(this.type+'---'+this.attr);
//     }
// }

// //通过new实例化
// var myBird = new Bird({
//     name: '小燕子',
//     type: 'Egg animal'//卵生动物
// },'Bird class')
// myBird.eat()
// myBird.fly()
// myBird.myattr()
