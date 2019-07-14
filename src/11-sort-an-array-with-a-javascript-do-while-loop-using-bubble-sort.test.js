const fc = require('fast-check');

const {
  bubbleSort,
} = require('./11-sort-an-array-with-a-javascript-do-while-loop-using-bubble-sort');

const log = (...args) => console.log(...args);

fc.assert(
  fc.property(fc.array(fc.nat(10)), xs => {
    log('\n');
    log('-----------------------------');

    bubbleSort(xs);

    log('-----------------------------');
    log('\n');
  })
);
