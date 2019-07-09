const {createQueue} = require('./02-queue-data-structure-in-javascript');

/**
 * createNode
 *
 * we need a key to identify the node
 *
 * we also need to store the neighbours of the current node, as well as add
 * neighbours to the node
 *
 * @param key
 * @returns {undefined}
 */
const createNode = key => {
  const neighbours = [];

  return {
    key,
    neighbours,
    addNeighbour(neighbour) {
      neighbours.push(neighbour);
    },
  };
};

/**
 * createGraph
 *
 * in a directed graph, two nodes are symmetrical if they point to each other.
 * In a non-directed graph, the symmetry is implied.
 *
 * @param directed
 * @returns {undefined}
 */
const createGraph = (directed = false) => {
  /**
   * a graph stores a collection of nodes, as well as a collection of the
   * edges / connections between those nodes
   */
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key));
    },

    getNode(key) {
      return nodes.find(node => key === node.key);
    },

    addEdge(k1, k2) {
      const n1 = this.getNode(k1);
      const n2 = this.getNode(k2);

      n1.addNeighbour(n2);
      edges.push(`${k1}-${k2}`);

      if (!directed) {
        n2.addNeighbour(n1);
      }
    },

    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;

        return acc;
      }, {});
      const queue = createQueue();
      queue.enqueue(startingNode);

      while (!queue.isEmpty() && startingNode) {
        const currentNode = queue.dequeue();

        if (!visited[currentNode.key]) {
          visitFn(currentNode);
          visited[currentNode.key] = true;
        }

        (currentNode.neighbours || []).map(node => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        });
      }
    },

    print() {
      return nodes.map(({key, neighbours}) => {
        return [key, neighbours.map(n => n.key).join(', ')]
          .filter(Boolean)
          .join(' => ');
      });
    },
  };
};

module.exports = {
  createGraph,
};
