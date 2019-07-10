/**
 * createNode
 *
 * A factory for creating nodes in the tree
 *
 * Each node needs to manage its own children
 *
 * @param key
 * @returns {object}
 */
const createNode = key => {
  const children = [];

  return {
    key,
    children,
    addChild(key) {
      const childNode = createNode(key);

      children.push(childNode);

      return childNode;
    },
  };
};

/**
 * createTree
 *
 * A tree must have a root node, so we expect that it's passed into the factory
 * function
 *
 * @param rootKey
 * @returns {undefined}
 */
const createTree = rootKey => {
  const root = createNode(rootKey);

  return {root};
};

module.exports = {createTree};
