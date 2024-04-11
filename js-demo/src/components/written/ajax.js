/**
 * ajax原生实现（Promise版本）
 * https://mp.weixin.qq.com/s?__biz=MzI4NjE3MzQzNg==&mid=2649866004&idx=1&sn=c2b8f18aa6ec257524e7413d5cb1a369&chksm=f3e5ee87c4926791c859333908b19374eb7f29148cfb47c90bd9481689e01a00b2058a47ac7d&cur_album_id=1490435895521574914&scene=189#wechat_redirect
 */
const ajax = ({
    url,
    method = 'get', // 请求方式
    async = true, // 是否异步
    data = null // 数据
} = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // 初始化

        xhr.open(method, url, async);
        xhr.send(data);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } catch (e) { // json格式解析错误时
                        reject(e);
                    }
                } else {
                    reject(new Error(xhr.statusText));
                }
            }
        };
    });
};

const Demo = () => {
    const url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';
    const url1 = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-03-26/2017-06-10';

    Promise
        .all([
            ajax(url),
            ajax(url1)
        ])
        .then(([
            value,
            value1
        ]) => {
            // 建议大家在浏览器中看看这里的value值
            console.log({ value, value1 });
        })
        .catch(e => {
            console.log(e);
        });

    return null;
};

export default Demo;