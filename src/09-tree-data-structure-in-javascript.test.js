const fc = require('fast-check');

const {createTree} = require('./09-tree-data-structure-in-javascript');

const log = (...args) => console.log(...args);

const arbNatArr = fc.array(fc.nat(10));

fc.assert(
  fc.property(arbNatArr, xs => {
    log('=========================================');

    const [rootKey, ...rest] = xs;
    const {root} = createTree(rootKey);

    let lastNodeLeft = root;
    let lastNodeRight = root;

    rest.map(x => {
      const rand = Math.random();
      const switchContextNode = rand > 0.5;
      const side = rand > 0.25 && rand < 0.75 ? 'left' : 'right';
      const contextNode = side === 'left' ? lastNodeLeft : lastNodeRight;

      const currentNode = contextNode.addChild(x);

      if (switchContextNode) {
        if (side === 'left') {
          lastNodeRight = currentNode;
        } else {
          lastNodeLeft = currentNode;
        }
      }
    });

    function drawTree(node, level = 0) {
      const [key, children] = Object.values(node);
      const padding = Array.from({length: level})
        .fill(' ')
        .join('');

      log(level > 0 ? `${padding}=> ` : '', key);
      children.map(ch => drawTree(ch, level + 1));
    }

    drawTree(root);
    log('=========================================');
    log('\n');
  })
);
