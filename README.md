# Data Structures and Algorithms in JavaScript

Notes and annotations from Egghead.io's [Data Structures and Algorithms in JavaScript](https://egghead.io/courses/data-structures-and-algorithms-in-javascript)


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 02. Queue Data Structure in JavaScript

[02-queue-data-structure-in-javascript.js](src/02-queue-data-structure-in-javascript.js)

```bash
$ node src/02-queue-data-structure-in-javascript
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
$ node src/03-priority-queue-javascript-data-structure.js
```

A priority queue is simply a queue that manages two lists, allowing a user to
specify if an item is priority or not, favouring dequeueing priority items over
non-priority items
