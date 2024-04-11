/**
 * 节流：n秒内只执行一次，若在n秒内重复触发，则只有一次有效
 * https://vue3js.cn/interview/JavaScript/debounce_throttle.html#%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0
 * 一种优化高频率执行代码的手段
 * 应用场景：在间隔一段时间执行一次的回调场景
 * 滚动加载：加载更多、滚到底部监听
 * 搜索联想功能
 */

const throttle = ({
    fn,
    wait
} = {}) => {
    let run = true;
    const context = this;
    const args = arguments;

    return function () { 
        if(!run) return;

        run = false;
        setTimeout(() => {
            fn.apply(context, args);
            run = true;
        }, wait)
     }
};

const Demo = () => null;

export default Demo;