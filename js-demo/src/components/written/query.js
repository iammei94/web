
/**
 * 实现一个方法，拆解URL参数中queryString：拆解URL参数中queryString，返回一个 key - value 形式的 object
 * 入参格式参考：const url = 'http://sample.com/?a=1&b=2&c=xx&d#hash';
 * 出参格式参考：const result = { a: '1', b: '2', c: 'xx', d: '' };
 * */

function querySearch(url) {
    // your code are here...
    const qs = ((((url.split('?') || [])[1] || '').split('#') || [])[0] || '').split('&') || [];

    return qs.reduce((args, item) => {
        let itemArr = item.split('=') || [];
        args[itemArr[0]] = itemArr[1] || '';

        return args;
    }, {});
}

const Demo = () => {
    const url = 'http://sample.com/?a=1&b=2&c=xx&d#hash';
    const result = querySearch(url);

    console.log(result);
    return null;
};

export default Demo;