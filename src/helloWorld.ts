export const sym = Symbol("123123123");

const consoleHelloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("hello World", sym);
      resolve(123);
    }, 1000);
  });
};

export default consoleHelloWorld;
