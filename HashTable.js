class HashTable {
  constructor(size) {
    this.storage = [];
    this.size = size;
  }

  hash(string) {
    let value = 0;
    for (let i = 0; i < string.length; i++) {
      value += string.charCodeAt(i);
    }
    return value % this.size;
  }

  print() {
    console.log(this.storage);
  }

  add(key, value) {
    const index = this.hash(key);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted) {
        this.storage[index].push([key, value]);
      }
    }
  }

  remove(key) {
    const index = this.hash(key);
    if (this.storage[index] === undefined) return;
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  }

  lookup(key) {
    const index = this.hash(key);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
      return undefined;
    }
  }
}
