class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) return undefined;

    this.count--;
    const item = this.storage[this.count];
    delete this.storage[this.count];
    return item;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}
