const fc = require('fast-check');
const {createQueue} = require('./02-queue-data-structure-in-javascript');

const log = (...args) => console.log(...args);

/**
 * createPriorityQueue
 *
 * Use a queue to allow users to specify values which have higher priority over
 * other values
 *
 * @returns {object}
 */
const createPriorityQueue = () => {
  let q = createQueue();
  let pq = createQueue();

  return {
    enqueue(item, priority = false) {
      if (priority) {
        pq.enqueue(item);
      } else {
        q.enqueue(item);
      }
    },

    dequeue() {
      const queue = pq.length ? pq : q;
      const val = queue.dequeue();

      return val;
    },

    peek() {
      const queue = pq.length ? pq : q;

      return queue.peek();
    },

    get length() {
      return q.length + pq.length;
    },

    isEmpty() {
      return q.length + pq.length === 0;
    },
  };
};

module.exports = {
  createPriorityQueue,
};
