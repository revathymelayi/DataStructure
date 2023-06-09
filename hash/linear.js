class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    set(key, value) {
      let index = this.hash(key);
      let count = 0;
      while (this.table[index] !== undefined && this.table[index][0] !== key) {
        index = (index + 1) % this.size;
        count++;
        if (count === this.size) {
          console.error('Table is full!');
          return;
        }
      }
      this.table[index] = [key, value];
    }
  
    get(key) {
      let index = this.hash(key);
      let count = 0;
      while (this.table[index] !== undefined && this.table[index][0] !== key) {
        index = (index + 1) % this.size;
        count++;
        if (count === this.size) {
          console.error('Key not found!');
          return;
        }
      }
      return this.table[index] !== undefined ? this.table[index][1] : undefined;
    }
  
    remove(key) {
      let index = this.hash(key);
      let count = 0;
      while (this.table[index] !== undefined && this.table[index][0] !== key) {
        index = (index + 1) % this.size;
        count++;
        if (count === this.size) {
          console.error('Key not found!');
          return;
        }
      }
      if (this.table[index] === undefined) {
        return;
      } else {
        delete this.table[index];
        let i = (index + 1) % this.size;
        while (this.table[i] !== undefined) {
          const key = this.table[i][0];
          const value = this.table[i][1];
          delete this.table[i];
          this.set(key, value);
          i = (i + 1) % this.size;
        }
      }
    }
  
    display() {
      for (let i = 0; i < this.size; i++) {
        if (this.table[i] !== undefined) {
          console.log(i, this.table[i]);
        }
      }
    }
  }

const table = new HashTable(10)
table.set("name","revathy")
table.set("name","reva")
table.set("na","revathy")
table.display()
  