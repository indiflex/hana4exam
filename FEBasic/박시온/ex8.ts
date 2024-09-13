// dummy(mock)입니다. 올바르게 수정하세요.

type CBT<T> = (...args: T[]) => void;
type Timer = ReturnType<typeof setTimeout> | undefined;

const myDebounce = <T>(cb: CBT<T>, delay: number) => {
  let timer: Timer;

  return (...args: T[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => cb(...args), delay);
  };
};

const myThrottle = <T>(cb: CBT<T>, delay: number) => {
  let timer: Timer | null;

  return (...args: T[]) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

// function throttle...

const dbc = myDebounce((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) dbc(i); // 15 출력

const thr = myThrottle((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) thr(i); // 11 출력
