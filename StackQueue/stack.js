export class Stack {
  arr = [];

  push(value) {
    // push의 return 값은 length
    return this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  top() {
    // return this.arr[this.arr.length - 1];  예전 방법
    return this.arr.at(-1);
  }

  //get을 쓰면 메소드가 아닌 getter라고 부른다. (배열의 length)
  get length() {
    return this.arr.length;
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(3);
// stack.push(5);
// stack.push(2);
// stack.push(4); // 5
// console.log(stack.length); // 5
// stack.pop(); // 4
// console.log(stack.top); // 2
