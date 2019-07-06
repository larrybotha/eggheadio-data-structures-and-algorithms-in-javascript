const fc = require('fast-check');

const {
  createLinkedList,
} = require('./05-linked-list-data-structure-in-javascript');

const log = (...args) => console.log(...args);

fc.assert(
  fc.property(fc.array(fc.string()), ss => {
    console.log('\n');
    log('================================');

    const list = createLinkedList();

    ss.map((s, i) => list.push(s));

    ss.map((_, i) => {
      log('list: ', '\n', list.print(), '\n');

      const length = list.length;
      const nodeToPop = list.get(length - 1);
      const popped = list.pop();

      log('length: ', length);
      log('node to pop: ', nodeToPop);
      log('popped correct node: ', nodeToPop === popped);
      log('length decremented: ', length - 1 === list.length);
      log('next node to pop:', list.get(list.length - 1));

      log('-----------------------------');
    });

    log('is empty: ', list.isEmpty());
    log('================================');
    console.log('\n');

    return list.isEmpty();
  })
);
