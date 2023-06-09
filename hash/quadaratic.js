//example for quadratic probing 
class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      return key % this.size;
    }
  
    set(key, value) {
      let index = this.hash(key);
      let i = 1;
      while (this.table[index] !== undefined) {
        index = (index + Math.pow(i, 2)) % this.size;
        i++;
      }
      this.table[index] = [key, value];
    }
  
    get(key) {
      let index = this.hash(key);
      let i = 1;
      while (this.table[index] !== undefined) {
        if (this.table[index][0] === key) {
          return this.table[index][1];
        }
        index = (index + Math.pow(i, 2)) % this.size;
        i++;
      }
      return undefined;
    }
  
    remove(key) {
      let index = this.hash(key);
      let i = 1;
      while (this.table[index] !== undefined) {
        if (this.table[index][0] === key) {
          this.table[index] = undefined;
          return;
        }
        index = (index + Math.pow(i, 2)) % this.size;
        i++;
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

const table = new HashTable(10);
table.set(42, "value1");
table.set(16, "value2");
table.set(91, "value3");
table.set(33, "value4");
table.set(18, "value5");
table.set(27, "value6");
table.set(36, "value7");
table.set(62, "value8");



table.display();
