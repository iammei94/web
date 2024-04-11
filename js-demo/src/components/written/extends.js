/**
 * 用组合继承的方式实现Child类继承Parent类及其他对象的属性和方法
 */

function Parent() {}
Parent.prototype.sayHi = function (hi) { 
    console.log(hi);
}

function Child() {
    Parent.call(this);
}

function extendFunction (Child, Parent, obj) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;

    Object.keys(obj).forEach(key => {
        Child.prototype[key] = obj[key];
    })
}

const Demo = () => {
    const obj = {
        name: 'Cassie',
        sayName: function () {
            console.log(this.name); // 'Cassie'
        }
    };
    extendFunction(Child, Parent, obj);
    var child = new Child();
    console.log(child);
    return null;
};

export default Demo;