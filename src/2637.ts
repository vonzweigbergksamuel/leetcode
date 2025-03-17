type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const limit = new Promise((res, rej) => {
      setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
    });

    const promise = fn(...args);

    return Promise.race([limit, promise]);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// Had to look up the solution for this one. I was really close, but I didn't know about returning the setTimeout as a promise.
