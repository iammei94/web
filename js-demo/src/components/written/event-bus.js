
/**
 * 实现自定义事件
 * 编写一个简单的自定义事件处理器
 * 1. 具备 on 方法绑定事件
 * 2. 具备 off 方法解绑事件
 * */
function EventEmitter() {
}

// TODO: 你的代码
EventEmitter.prototype.on = function (eventName, callback) {
    // 没有事件对象，则新增一个
    if (!this._events) {
        // 新增一个干净的没有原型链的对象
        this._events = Object.create(null);
    }

    // 若没有这个事件的订阅，新增一个；有则直接push
    if (!this._events[eventName]) {
        this._events[eventName] = [callback];
    } else {
        this._events[eventName].push(callback);
    }
}
EventEmitter.prototype.off = function (eventName) {  
    // 若有事件订阅，直接移除
    if (!!eventName && this._events[eventName]) {
        delete this._events[eventName];
    }
}
EventEmitter.prototype.trigger = function (eventName, ...args) { 
    // 发布的时候，若有事件，循环 
    if(!!eventName && this._events[eventName]) {
        this._events[eventName].forEach(callback => {
            callback(...args);
        })
    }
}


const Demo = () => {
    var emitter = new EventEmitter();
    emitter.on('foo', function (e) {
        console.log('listening foo event 1', e);
    });
    
    emitter.on('foo', function (e) {
        console.log('listening foo event 2', e);
    });
    
    emitter.on('bar', function (e) {
        console.log('listening bar event', e);
    });
    
    // 监听全部事件
    emitter.on('*', function (e) {
        console.log('listening all events');
    });
    
    emitter.trigger('foo', { name: 'John' });
    emitter.trigger('bar', { name: 'Sun' });
    emitter.trigger('*', { name: 'Sun' });
    emitter.off('foo');

    return null;
};

export default Demo;