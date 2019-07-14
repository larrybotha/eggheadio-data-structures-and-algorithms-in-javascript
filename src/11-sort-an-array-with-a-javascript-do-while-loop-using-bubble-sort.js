const log = (...args) => console.log(...args);

/**
 * bubbleSort
 *
 * @param xs
 * @returns {undefined}
 */
const bubbleSort = (xs = []) => {
  let swapped = false;

  do {
    swapped = false;

    /**
     * iterate over the provided array:
     *
     * - if the current current item is greater than the next item, switch them
     *  - indicate that there was a swap to exit this iteration of the do block
     */
    xs.forEach((item, i) => {
      log(xs);
      if (xs[i] > xs[i + 1]) {
        [xs[i], xs[i + 1]] = [xs[i + 1], xs[i]];
        swapped = true;
      }
    });
  } while (swapped);

  return xs;
};

module.exports = {bubbleSort};
