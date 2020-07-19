class PriorityQueue {
  constructor() {
    this.content = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.content.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.content.length; i++) {
        if (element[1] < this.content[i][1]) {
          this.content.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.content.push(element);
      }
    }
  }

  dequeue() {
    const item = this.content.shift();
    return item[0];
  }
}
