/**
 * @descript 处理竞态的函数，对函数包装后，执行前会取消上次的执行
 */
const latestResultWrapper = <T extends (...args: any[]) => Promise<any>>(
  fn: T
) => {
  let cancel: () => any;
  return (...args: Parameters<T>) => {
    if (cancel) {
      cancel();
    }
    return Promise.race<ReturnType<T>>([
      fn(...args),
      new Promise((_, reject) => {
        cancel = reject;
      }),
    ]);
  };
};

export default latestResultWrapper;
