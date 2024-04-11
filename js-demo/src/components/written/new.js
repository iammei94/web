
/**
 * 手写new操作符
 * new操作符具体做了什么
 * 1. 创建一个新的对象 
 * 2. 将对象与构造函数通过原型链连接在一起
 * 3. 将构造函数中的this绑定到此新对象上
 * 4. 根据构造函数返回类型做判断
 * https://vue3js.cn/interview/JavaScript/new.html#%E4%BA%8C%E3%80%81%E6%B5%81%E7%A8%8B
 */
const newWritten = (Func, ...args) => {
    let obj = {};
    obj.__proto__ = Func.prototype;
    let result = Func.apply(obj, args);

    return result instanceof Object ? result : obj
};

const Demo = () => {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        console.log(this.name);
    }
    
    let p = newWritten(Person, "huihui", 123); // 模拟new构造函数

    console.log(p); // Person {name: "huihui", age: 123}
    p.say(); // huihui
};

export default Demo;