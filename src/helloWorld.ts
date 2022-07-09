export const sym = Symbol("123123123");

const consoleHelloWorld = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(123);
    }, 1000);
  });

export default consoleHelloWorld;
