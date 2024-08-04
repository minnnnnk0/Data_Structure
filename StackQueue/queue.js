class Queue {
  arr = [];

  enqueue(value) {
    return this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }

  peek() {
    // this.arr.at(0);
    return this.arr[0];
  }

  get length() {
    return this.arr.length;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(3);
q.enqueue(5);
q.enqueue(2);
q.enqueue(4); // 5
console.log(q.length); // 5
q.dequeue(); // 1
console.log(q.peek); // 3
