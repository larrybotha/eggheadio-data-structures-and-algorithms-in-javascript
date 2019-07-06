const fc = require('fast-check');
const {
  createPriorityQueue,
} = require('./03-priority-queue-javascript-data-structure');

const log = (...args) => console.log(...args);

fc.assert(
  fc.property(fc.array(fc.string()), ss => {
    console.log('\n');
    log('============================');

    const q = createPriorityQueue();
    const values = ss.map((s, i) => {
      const isPriority = (i + 1) % 3 === 0;

      return {val: s, isPriority, index: i};
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

      if (q.peek()) {
        log('index of next to remove: ', q.peek().index);
      }

      log('--------------------------');
    });

    log('is empty: ', q.isEmpty());
    log('============================');
    console.log('\n');

    return q.isEmpty();
  })
);
