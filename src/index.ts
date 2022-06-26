import helloWorld from "./helloWorld";
type MyPick<T, K extends keyof T = keyof T> = {
  [P in K]: T[P];
};
let a: MyPick<{ a: string }>;

a = {
  a: "1231",
};

export const consoleHelloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("hello World");
      resolve(123);
    }, 1000);
  });
};

helloWorld()

export default a;
