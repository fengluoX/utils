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
