const fc = require('fast-check');

const {
  insertionSort,
} = require('./12-sort-an-array-with-a-nested-for-loop-using-insertion-sort-in-javascript');

const log = (...args) => console.log(...args);

const arbNatArray = fc.array(fc.nat(10));

fc.assert(
  fc.property(arbNatArray, xs => {
    log('--------------------------------');

    insertionSort(xs);

    log('--------------------------------');
    log('\n');
  })
);
