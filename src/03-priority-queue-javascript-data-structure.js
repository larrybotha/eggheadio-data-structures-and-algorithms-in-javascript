const fc = require('fast-check');

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
  let q = [];
  let pq = [];

  return {
    enqueue(item, priority = false) {
      if (priority) {
        pq = [item].concat(pq);
      } else {
        q = [item].concat(q);
      }
    },

    dequeue() {
      const queue = pq.length ? pq : q;
      const val = queue.pop();

      return val;
    },

    peek() {
      const queue = pq.length ? pq : q;

      return queue[queue.length - 1];
    },

    get length() {
      return q.length + pq.length;
    },

    isEmpty() {
      return q.length + pq.length === 0;
    },
  };
};

fc.assert(
  fc.property(fc.array(fc.lorem()), ss => {
    console.log('\n');
    log('============================');

    const q = createPriorityQueue();
    const values = ss.map((s, i) => {
      const isPriority = i % 3 === 0;

      return {val: s, isPriority};
    });
    const nonPValues = values.filter(val => !Boolean(val.isPriority));
    const pValues = values.filter(val => Boolean(val.isPriority));

    // add non priority first
    values.map(v => q.enqueue(v, v.isPriority));

    values.map((_, i) => {
      const currLength = q.length;
      const dequeued = q.dequeue();

      log('length: ', currLength);
      log('dequeued: ', dequeued);
      log('new length is decremented:', currLength - 1 === q.length);

      if (i < pValues.length) {
        log('item is priority: ', dequeued.isPriority);
      } else {
        log('item is not priority: ', !dequeued.isPriority);
      }

      log('next to remove: ', q.peek());

      log('--------------------------');
    });

    log('is empty: ', q.isEmpty());
    log('============================');
    console.log('\n');

    return q.isEmpty();
  })
);
