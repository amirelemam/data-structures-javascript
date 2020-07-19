class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  add(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;
  }

  remove(element) {
    let currentNode = this.head;

    if (currentNode === null) return;
    else if (currentNode.element === element) {
      this.head = currentNode.next;
    } else {
      let previousNode;

      while (currentNode.element !== element) {
        if (currentNode === null) return;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  }

  isEmpty() {
    return !this.length;
  }

  reverse() {
    let previous = null;
    let current = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }
}
