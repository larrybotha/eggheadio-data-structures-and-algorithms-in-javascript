const fc = require('fast-check');

const log = (...args) => console.log(...args);

/**
 * createQueue
 *
 * Handles items using FIFO strategy
 *
 * @returns {object}
 */
const createQueue = () => {
  let queue = [];

  return {
    enqueue(item) {
      queue = [item].concat(queue);
    },

    dequeue() {
      const result = queue[queue.length - 1];

      queue = queue.slice(0, -1);

      return result;
    },

    peek() {
      return queue[queue.length - 1];
    },

    get length() {
      return queue.length;
    },

    isEmpty() {
      return queue.length === 0;
    },
  };
};

module.exports = {
  createQueue,
};
