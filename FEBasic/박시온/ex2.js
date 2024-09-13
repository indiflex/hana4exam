// range 함수를 작성하세요.
const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];
  if ((start - end) * step > 0) return [];

  if (!end && end !== 0) {
    if (start === 0) return [0];
    else if (start > 0) {
      end = start;
      start = 1;
    } else {
      end = -1;
    }
  }
  const results = [];

  let k = 1;
  if (step % 1 !== 0) {
    k = 10 ** (step.toString().split('.')[1].length ?? 0);
  }

  let reverse = false;
  if (start > end) {
    reverse = true;
    start *= -1;
    end *= -1;
    step *= -1;
  }

  for (let i = start; i <= end; i = Math.round((i + step) * k) / k) {
    results.push(i);
  }

  return reverse ? results.map((a) => a * -1) : results;
};

module.exports = { range };
