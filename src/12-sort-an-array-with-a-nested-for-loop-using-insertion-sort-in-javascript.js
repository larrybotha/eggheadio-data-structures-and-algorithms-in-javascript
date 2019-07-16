const log = (...args) => console.log(...args);

const insertionSort = xs => {
  let i;
  let j;

  for (i = 1; i < xs.length; i++) {
    log(xs);
    for (j = 0; j < i; j++) {
      if (xs[i] < xs[j]) {
        const [item] = xs.splice(i, 1);
        xs.splice(j, 0, item);
      }
    }
  }

  log(xs);

  return xs;
};

module.exports = {insertionSort};
