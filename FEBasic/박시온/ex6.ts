export const randTime = <T>(val: T): Promise<T> =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

type RT<T> =
  | { status: 'fulfilled'; value: T }
  | { status: 'rejected'; reason: unknown };
export function promiseAllSettled<T>(promises: Promise<T>[]): Promise<RT<T>[]> {
  return new Promise((resolve) => {
    const results: RT<T>[] = [];
    let promiseCnt = 0;
    promises.forEach((promise, idx) =>
      Promise.resolve(promise)
        .then((value) => (results[idx] = { status: 'fulfilled', value }))
        .catch((reason) => (results[idx] = { status: 'rejected', reason }))
        .finally(() => {
          promiseCnt++;
          if (promiseCnt === promises.length) {
            resolve(results);
          }
        })
    );
  });
}
