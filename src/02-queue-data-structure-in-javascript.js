const fc = require('fast-check');

const log = (...args) => console.log(...args);

/**
 * createQueue
 *
 * Handles items using FIFO strategy
 *
 * @returns {undefined}
 */
function createQueue() {
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
}

fc.assert(
  fc.property(fc.array(fc.string().filter(Boolean)), ss => {
    console.log('\n');
    log('============================');
    const q = createQueue();

    ss.map(s => q.enqueue(s));

    ss.map((s, i) => {
      log('current to remove: ', q.peek());
      const removed = q.dequeue();
      log('removed: ', removed);
      log('next to remove: ', q.peek());
      log('----------------------------');
    });

    log('queue is now empty: ', q.isEmpty());

    log('============================');
    console.log('\n');

    return q.isEmpty();
  })
);
