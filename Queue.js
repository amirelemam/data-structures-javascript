class Queue {
  constructor() {
    this.content = [];
  }

  enqueue(item) {
    this.content.push(item);
  }

  dequeue() {
    return this.content.shift();
  }

  print() {
    console.log(this.content);
  }

  isEmpty() {
    return this.content.length === 0;
  }

  size() {
    return this.content.length;
  }

  front() {
    return this.content[0];
  }
}
