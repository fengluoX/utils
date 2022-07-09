import helloWorld from "./helloWorld";

type MyPick<T, K extends keyof T = keyof T> = {
  [P in K]: T[P];
};

const a: MyPick<{ a: string }> = {
  a: "1231",
};

export const consoleHelloWorld = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(2123213);

      console.log(12321321);
      resolve(123);
    }, 1000);
  });

helloWorld();

export default a;
