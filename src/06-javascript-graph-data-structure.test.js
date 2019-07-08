const fc = require('fast-check');

const {createGraph} = require('./06-javascript-graph-data-structure');

const log = (...args) => console.log(...args);

const arbLoremArray = fc.array(
  fc
    .hexaString()
    .map(s => s.trim())
    .filter(Boolean)
);

fc.assert(
  fc.property(
    fc.tuple(arbLoremArray, arbLoremArray, fc.boolean()),
    ([xs1, xs2, directed]) => {
      log('\n');
      log('================================');

      const graph = createGraph(directed);

      [...xs1, ...xs2].map(x => graph.addNode(x));

      xs1.map((x, i) => {
        const xs = xs2.slice(0, i).filter(Boolean);

        xs.map(x2 => graph.addEdge(x, x2));
      });

      log('is directed: ', graph.directed);
      log(graph.print());

      log('breadthFirstSearch for ', xs2[0]);
      graph.breadthFirstSearch(xs2[0], node => {
        log('visited: ', node.key);
      });
      log('breadthFirstSearch ended');

      graph.nodes.map(node => {
        const {key, neighbours} = node;
        log('key: ', key);

        if (neighbours.length) {
          log('neighbours:', neighbours.map(n => n.key).join(', '));
        }

        if (!directed && neighbours.length) {
          const neighbourNodes = neighbours.map(n => graph.getNode(n.key));

          const allNeighboursHaveKey = neighbourNodes.every(nb => {
            log([nb.key, key].join(' => '));

            const hasRef = nb.neighbours.map(n => n.key).indexOf(key) > -1;

            return hasRef;
          });

          log(
            'not directed, so all neighbours reference this node: ',
            allNeighboursHaveKey
          );
        }

        log('-----------------------------');
      });

      log('================================');
      log('\n');

      return true;
    }
  )
);
