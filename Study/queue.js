class Node {
    constructor(value) {
      this.cur = value
      this.next = null
    }
  }
  
  class Queue {
    constructor() {
      this.front = null
      this.rear = null
      this.length = 0
    }
  
    push(value) {
      const node = new Node(value)
      if (this.length === 0) {
        this.front = node
      } else {
        this.rear.next = node
      }
      this.rear = node
      this.length++
    }
  
    shift() {
      if (this.length === 0) return null
      const returnValue = this.front.cur
      this.front = this.front.next
      this.length--
      return returnValue
    }
  
    isEmpty() {
      return this.length === 0
    }
  }