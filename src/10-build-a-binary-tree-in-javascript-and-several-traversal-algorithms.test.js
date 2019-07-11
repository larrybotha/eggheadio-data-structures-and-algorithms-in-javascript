const fc = require('fast-check');

const {
  createBinaryTree,
  TRAVERSALS,
} = require('./10-build-a-binary-tree-in-javascript-and-several-traversal-algorithms');

const log = (...args) => console.log(...args);

const arbNatArray = fc.constant(Array.from({length: 10}).map((_, i) => i));

fc.assert(
  fc.property(arbNatArray, xs => {
    log('===============================');
    log('\n');

    const [rootKey, ...rest] = xs;

    const tree = createBinaryTree(rootKey);
    let lastNode = tree.root;

    rest.map(x => {
      if (!lastNode.left) {
        lastNode.addLeft(x);
      } else {
        const node = lastNode.addRight(x);

        lastNode = node;
      }
    });

    const traversalKeys = Object.keys(TRAVERSALS);

    traversalKeys.map(key => {
      log(key);
      log(tree.print(key));
      log('-------------------------------');
    });

    log('==============================');
    log('\n');
  })
);
