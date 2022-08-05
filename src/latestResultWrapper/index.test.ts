import latestResultWrapper from "./index";

const sleep = (time: number) =>
  new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });

const race = <T extends readonly Promise<any>[] | []>(val: T) =>
  new Promise<Awaited<T[number]>>((resolve) => {
    val.forEach(async (item) => {
      item.then(resolve, () => {});
    });
  });

test("Sequential execution", () => {
  const testFun = latestResultWrapper(sleep);

  return race([testFun(1), testFun(3)]).then((data) => {
    expect(data).toBe(3);
  });
});

test("Late departure, first arrival", () => {
  const testFun = latestResultWrapper(sleep);
  return race([testFun(3), testFun(1)]).then((data) => {
    expect(data).toBe(1);
  });
});
