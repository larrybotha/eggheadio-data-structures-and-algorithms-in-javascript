const fc = require('fast-check');

const {createStack} = require('./04-stack-data-structure-in-javascript');

const log = (...args) => console.log(...args);

fc.assert(
  fc.property(fc.array(fc.string()), ss => {
    console.log('\n');
    log('================================');

    const stack = createStack();

    ss.map((s, i) => ({val: s, index: i})).map(v => stack.push(v));

    ss.map(() => {
      const length = stack.length;
      log('length: ', length);

      const popped = stack.pop();
      log('popped value: ', popped);

      log('length is decremented: ', stack.length === length - 1);
      log('next item: ', stack.peek());

      log('-------------------------------');
    });

    log('is empty: ', stack.isEmpty());

    log('================================');
    console.log('\n');

    return stack.isEmpty();
  })
);
