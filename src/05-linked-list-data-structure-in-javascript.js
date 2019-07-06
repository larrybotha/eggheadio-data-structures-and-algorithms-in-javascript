/**
 * getNewTail
 *
 * iterate over the stack from head until we get to the node that precedes the
 * current node
 *
 * Has complexiry O(n) because we need to iterate over each item in the stack
 * linearly
 *
 * @param stack
 * @returns {node}
 */
const getNewTail = stack => {
  /**
   * if length is greater than 1, iterate over list from head, until we get to the
   * current node
   */
  let current = stack.head;
  let newTail;

  /**
   * while we have any nodes to evalute
   */
  while (current) {
    /**
     * if the next node is the same as the node we're returning, then we've found
     * the new tail - i.e. the node preceding the node we are returning
     *
     * we can set the tail to this node
     */
    if (current.next === stack.tail) {
      newTail = current;
      break;
    }

    /**
     * if the next node was not the node we're returning, then we move on to
     * determine if the next node code be the new tail
     */
    current = current.next;
  }

  return newTail;
};

/**
 * getNodeAtIndex
 *
 * return the node at the given index
 *
 * @param stack
 * @param index
 * @returns {node}
 */
const getNodeAtIndex = (stack, index) => {
  let current = stack.head;
  let count = 0;

  /**
   * if index is 0, return the head
   */
  if (index === 0) {
    return current;
  }

  /**
   * if index is last item, return tail
   */
  if (index === stack.length - 1) {
    return stack.tail;
  }

  /**
   * if index is greater than length of stack, return undefined
   */
  if (index >= stack.length) {
    return undefined;
  }

  /**
   * otherwise start at the head, iterating over each item in the stack until we
   * have moved over the number of nodes the index defines
   */
  while (count < index) {
    current = current.next;
    count++;
  }

  return current;
};

/**
 * createNode
 *
 * Each node in a linked list points to the next item in the list, if there is
 * one, otherwise the reference is empty
 *
 * @param value
 * @returns {undefined}
 */
const createNode = value => {
  return {
    value,
    next: null,
  };
};

/**
 * createLinkedList
 *
 * factory for creating a linked list
 *
 * @returns {undefined}
 */
const createLinkedList = () => {
  return {
    head: null,
    tail: null,
    length: 0,

    push(value) {
      const node = createNode(value);

      /**
       * if no head, set this node to head
       */
      if (!this.head) {
        this.head = node;
      }

      /**
       * if there is a tail, set the next node on the tail to the new node
       */
      if (this.tail) {
        this.tail.next = node;
      }

      /*
       * set the tail to the current node
       */
      this.tail = node;
      this.length++;

      return node;
    },

    pop() {
      /**
       * if list is empty, return undefined
       *
       */
      if (this.isEmpty()) {
        return;
      }

      const node = this.tail;
      this.length--;

      /**
       * if only one item, return that item, set head and tail to null, and
       * return early
       */
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        return node;
      }

      /**
       * get the new tail
       */
      this.tail = getNewTail(this);

      /**
       * now that we have the new tail, we need to ensure that it doesn't
       * reference the node we are returning
       */
      this.tail.next = null;

      return node;
    },

    get(index) {
      return getNodeAtIndex(this, index);
    },

    delete(index) {
      const node = getNodeAtIndex(this, index);

      if (!node) {
        return;
      }

      /**
       * if returned node is the head, set the head to the next item
       */
      if (node === this.head) {
        this.head = this.head.next;
      }

      /**
       * get the new tail, set next to null, decrement length
       */
      this.tail = getNewTail(this);
      this.tail.next = null;
      this.length--;

      return node;
    },

    get length() {
      let length = 0;
      let current = this.head;

      while (current) {
        length++;
        current = current.next;
      }

      return length;
    },

    isEmpty() {
      return this.length === 0;
    },

    print() {
      let current = this.head;
      let xs = [];

      while (current) {
        xs = xs.concat(current);
        current = current.next;
      }

      return xs
        .map((x, i) => `${i === 0 ? '   ' : ''}${i}. ${x.value}`)
        .join('\n => ');
    },
  };
};

module.exports = {createLinkedList};
