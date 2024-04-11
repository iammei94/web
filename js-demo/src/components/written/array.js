/**
 * 实现一个方法，去除数组arr中指定的某一成员，并返回该数组的长度，注意：直接修改arr。例子
 * 1.nums = [3,2,2,3]，去除v=3的成员，并返回nums（此时值为[2,2]）的长度为2
 * 2.nums = [0,1,5,2,3,4,5]，去除v=5的成员，并返回nums（此时值为[0,1,2,3,4]）的长度为5
 */

const removeItemFromArray = (arr, v) => {
    let index = arr.indexOf(v);
    
    while(index !== -1){
        arr.splice(index, 1);
        index = arr.indexOf(v);
    };

    return arr.length;
};

const Demo = () => {
    const nums1 = [3,2,2,3];
    const nums2 = [0,1,5,2,3,4,5];
    const length1 = removeItemFromArray(nums1, 2);
    const length2 = removeItemFromArray(nums2, 5);

    console.log(length1, length2);
    return null;
};

export default Demo;