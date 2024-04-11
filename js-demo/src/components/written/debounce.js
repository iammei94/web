/**
 * 防抖：n秒后执行该事件，若在n秒内被重复触发，则重新计时
 * https://vue3js.cn/interview/JavaScript/debounce_throttle.html#%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0
 *  优化高频率执行代码的一种手段
 * 应用场景：在连续的事件，只需要触发一次回调的场景
 * 手机号、邮箱输入检测；搜索框搜索输入
 * 窗口大小resize
 */

const debounce = ({
    fn,
    delay
} = {}) => {
    let timeout = null;
    const context = this;
    const args = arguments;

    return function()  {
        if (timeout) {
            clearTimeout(timeout);
        }

        // 一旦重新触发，就重新计时
        timeout = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    };
};

const Demo = () => null;

export default Demo;