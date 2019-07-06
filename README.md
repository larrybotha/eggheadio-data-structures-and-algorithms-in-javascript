# Data Structures and Algorithms in JavaScript

Notes and annotations from Egghead.io's [Data Structures and Algorithms in JavaScript](https://egghead.io/courses/data-structures-and-algorithms-in-javascript)


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 02. Queue Data Structure in JavaScript

[02-queue-data-structure-in-javascript.js](src/02-queue-data-structure-in-javascript.js)

```bash
$ node src/02-queue-data-structure-in-javascript.test.js
```

A queue has the following features:

- uses FIFO; first item in, is first item out
- has the following methods:
    - enqueue - add item to beginning
    - dequeue - remove item from end
    - peek - get value of next item to remove
    - length - get length of queue
    - isEmpty - determine if queue is empty or not

## 03. Priority Queue JavaScript Data Structure

[03-priority-queue-javascript-data-structure.js](src/03-priority-queue-javascript-data-structure.js)

```bash
$ node src/03-priority-queue-javascript-data-structure.test.js
```

A priority queue is simply a queue that manages two lists, allowing a user to
specify if an item is priority or not, favouring dequeueing priority items over
non-priority items

## 04. Stack Data Structure in JavaScript

[04-stack-data-structure-in-javascript.js](src/04-stack-data-structure-in-javascript.js)

```bash
$ node src/04-stack-data-structure-in-javascript.test.js
```

A stack uses LIFO. A stack has the following methods / properties:

- push - add to the stack
- pop - remove an item from the stock
- peek - get the next value from the stock
- length - get the number of items in the stock
- isEmpty - boolean if the stack has any items

## 05. Linked List Data Structure in JavaScript

[05-linked-list-data-structure-in-javascript.js](src/05-linked-list-data-structure-in-javascript.js)

```bash
$ node src/05-linked-list-data-structure-in-javascript.test.js
```

In a linked list, each item has a reference to the next item in the list.

Each node in a list has the following:

- the value for the node
- a reference to the next node if it exists, otherwise `null`

A linked list has the following properties and methods:

- head - value of first item in list
- tail - items in the list after the head
- length - current list length
- push - add an item to the list
- pop - remove an item from the list
- get - get a specific item from the list
- delete - delete a specific item from the list
- isEmpty - boolean for length of list

## 06. JavaScript Graph Data Structure

[06-javascript-graph-data-structure.js](src/06-javascript-graph-data-structure.js)

```bash
$ node src/06-javascript-graph-data-structure.test.js
```

A graph is a collection of nodes or vertices.

A node may point to another node, and these connections are called edges.

A node has the following properties:

- its key, used to identify it
- a list of neighbours

A graph has the following properties:

- nodes - a list of its nodes
- edges - a list of its connections
- addNode - a function to add a new node
- addEdge - a function to associate one node with another
- getNode - a function to get a node by its key
- directed - a directed graph will only add neighbours in one direction. A
    non-directed graph will implicitly add a neighbour in both directions. i.e.
    n1 will point to n2, and vice versa: `n1 <= => n2`
