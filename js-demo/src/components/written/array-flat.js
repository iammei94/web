/**
 * 将 const arr = [1,[2,[3,[4,5]]],6] 扁平化
*/
const arr = [1,[2,[3,[4,5]]],6];

/**
 * ES6 数组的flat方法
*/
// console.log(arr.flat(InFinity), 'flat方法');

/**
 * 利用 JSON.stringify、JSON.parse + 正则表达式
*/
const arrStr = JSON.stringify(arr).replace(/\[|\]/g, '');
console.log(JSON.parse(`[${arrStr}]`), 'JSON.stringify、JSON.parse');

/**
 * 递归
*/
let array1 = [];
const fn = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        Array.isArray(arr[i]) ? fn(arr[i]) : array1.push(arr[i]);
    }
};
fn(arr);

console.log(array1, '递归');

/**
 * ES6 reduce
*/
const fn2 = (array) => {
    return array.reduce((arr, item) => {
        return arr.concat(Array.isArray(item) ? fn2(item) : [item]);
    }, []);
}

const array2 = fn2(arr);
console.log(array2, 'reduce');


const Demo = () => {
    return null;
};

export default Demo;
