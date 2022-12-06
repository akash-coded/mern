class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PQ {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent.priority <= current.priority) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }
  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let index = 0;
    const length = this.values.length;
    const current = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority > current.priority) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority > current.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }

    return max;
  }
}

const tree = new BH();
tree.enqueue(3, 2);
tree.enqueue(4, 5);
tree.enqueue(31, 1);
tree.enqueue(6, 3);
console.log(tree.dequeue()); // 4
console.log(tree.dequeue()); // 6
console.log(tree.dequeue()); // 3
console.log(tree.dequeue()); // 31
