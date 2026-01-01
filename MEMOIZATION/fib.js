const { cache } = require("react");

const fib = (n) => {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log(fib(40));

const memoizedFib = (n) => {
  const cache = {};
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 2) return 1;
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
};

const fibo = memoizedFib();
console.log(fibo(40));
