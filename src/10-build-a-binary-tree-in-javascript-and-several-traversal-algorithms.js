/**
 * createNode
 *
 * create a node in a binary tree
 *
 * @param key
 * @returns {undefined}
 */
const createNode = key => {
  return {
    key,
    side: null,
    left: null,
    right: null,
    addLeft(key) {
      const node = createNode(key);

      this.left = node;
      node.side = 'left';

      return node;
    },
    addRight(key) {
      const node = createNode(key);

      this.right = node;
      node.side = 'right';

      return node;
    },
  };
};

const TRAVERSALS = {
  /**
   * IN_ORDER
   *
   * Traverses a tree as far as it can down the left branch, executing the
   * visitng function, and then going down the right branch
   *
   * @param node
   * @param visitFn
   * @returns {undefined}
   */
  IN_ORDER: (node, visitFn) => {
    if (Boolean(node)) {
      TRAVERSALS.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSALS.IN_ORDER(node.right, visitFn);
    }
  },

  /**
   * PRE_ORDER
   *
   * Pre-order means we first visit the node, and then travrese down the left
   * branch, followed by the right branch
   *
   * @param node
   * @param visitFn
   * @returns {undefined}
   */
  PRE_ORDER: (node, visitFn) => {
    if (Boolean(node)) {
      visitFn(node);
      TRAVERSALS.PRE_ORDER(node.left, visitFn);
      TRAVERSALS.PRE_ORDER(node.right, visitFn);
    }
  },

  /**
   * POST_ORDER
   *
   * In post order we first traverse down the left, then the right, and then
   * only visit our node
   *
   * @param node
   * @param visitFn
   * @returns {undefined}
   */
  POST_ORDER: (node, visitFn) => {
    if (Boolean(node)) {
      TRAVERSALS.POST_ORDER(node.left, visitFn);
      TRAVERSALS.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  },
};

/**
 * createBinaryTree
 *
 * create a binary tree
 *
 * @param rootKey
 * @returns {undefined}
 */
const createBinaryTree = rootKey => {
  const root = createNode(rootKey);

  return {
    root,
    print(traversalMethod = 'IN_ORDER') {
      let result = '';

      const visit = node => {
        result +=
          result.length === 0
            ? `${node.key}\n`
            : ` => ${node.key} (${node.side})\n`;
      };

      TRAVERSALS[traversalMethod](this.root, visit);

      return result;
    },
  };
};

module.exports = {createBinaryTree, TRAVERSALS};
