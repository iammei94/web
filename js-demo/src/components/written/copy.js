
/**
 * 浅、深拷贝
 * 参考：https://vue3js.cn/interview/JavaScript/copy.html#%E4%B8%80%E3%80%81%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%AD%98%E5%82%A8
 */
const initial = obj1 ={
    name:'张三',
    age:8,
    pal:['王五','王六','王七']
};

const shallowCopy = (obj = {}) => {
    let newObj = {};

    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            newObj[item] = obj[item];
        }
    }

    return newObj;

};

const deepCopy = (obj = {}) => {
};

const Demo = () => null;

export default Demo;