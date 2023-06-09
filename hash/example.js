
//example for linear probing 
class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      return key % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
  
      // If the slot at index is empty, insert the key-value pair there
      if (!this.table[index]) {
        this.table[index] = [key, value];
        return;
      }
  
      // If the slot at index is occupied, use linear probing to find the next empty slot
      let i = 1;
      let nextIndex = (index + i) % this.size;
      while (nextIndex != index) {
        if (!this.table[nextIndex]) {
          this.table[nextIndex] = [key, value];
          return;
        }
        i++;
        nextIndex = (index + i) % this.size;
      }
  
      // If no empty slot is found, the table is full and the insertion fails
      console.log("Hash table is full, cannot insert key-value pair");
    }
  
    get(key) {
      const index = this.hash(key);
  
      // If the slot at index contains the key, return the corresponding value
      if (this.table[index] && this.table[index][0] == key) {
        return this.table[index][1];
      }
  
      // If the slot at index does not contain the key, use linear probing to find the next slot that does
      let i = 1;
      let nextIndex = (index + i) % this.size;
      while (nextIndex != index) {
        if (this.table[nextIndex] && this.table[nextIndex][0] == key) {
          return this.table[nextIndex][1];
        }
        i++;
        nextIndex = (index + i) % this.size;
      }
  
      // If the key is not found in the table, return undefined
      return undefined;
    }
  
    display() {
      for (let i = 0; i < this.size; i++) {
        if (this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }
  
  // Create a hash table of size 
  const table = new HashTable(10);
  
  // Insert the keys  into the table
  table.set(43, "value for key 43");
  table.set(135, "value for key 135");
  table.set(72, "value for key 72");
  table.set(23, "value for key 23");
  table.set(99, "value for key 99");
  table.set(19, "value for key 19");
  table.set(82, "value for key 82");
 
  
  // Display the contents of the table
  table.display();
  console.log(table.get(99))

  