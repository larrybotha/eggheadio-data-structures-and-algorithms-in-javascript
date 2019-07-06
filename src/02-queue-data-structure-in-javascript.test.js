const fc = require('fast-check');

const {createQueue} = require('./02-queue-data-structure-in-javascript');

const log = (...args) => console.log(...args);

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
