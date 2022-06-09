class HashTable {
  constructor(size = 50) {
    this.buckets = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString().length % this.size;
  }

  // Insert data
  setItem(key, value) {
    let index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    this.buckets[index].push([key, value]);
    return index;
  }

  // Search data
  getItem(key) {
    let index = this.hash(key);

    if (!this.buckets[index]) return null;

    for (let bucket of this.buckets[index]) {
      // key
      if (bucket[0] === key) {
        // value
        return bucket[1];
      }
    }
  }
}

const hashTable = new HashTable();
// Insert data to the hash table
hashTable.setItem("bk101", "Data structures algorithms");
hashTable.setItem("bk108", "Data analytics");
hashTable.setItem("bk200", "Cyber security");
hashTable.setItem("bk259", "Business Intelligence");
hashTable.setItem("bk330", "S/W Development");

// Search data from the hash table
hashTable.getItem("bk101");
console.log(hashTable.getItem("bk101"));
