const log = (...args) => console.log(...args);

const createStack = () => {
  let stack = [];

  return {
    push(item) {
      stack = stack.concat(item);
    },

    pop() {
      const val = stack[stack.length - 1];

      stack = stack.slice(0, -1);

      return val;
    },

    peek() {
      return stack[stack.length - 1];
    },

    get length() {
      return stack.length;
    },

    isEmpty() {
      return stack.length === 0;
    },
  };
};

module.exports = {createStack};
