class MinHeap {
    constructor() {
      this.heap = []
    }
    insert(item) {
      this.heap.push(item)
      this.bubbleUp()
    }
    extractMin() {
      if (this.heap.length === 1) return this.heap.pop()
      const min = this.heap[0]
      this.heap[0] = this.heap.pop()
      this.bubbleDown()
      return min
    }
    bubbleUp() {
      let index = this.heap.length - 1
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2)
        if (this.heap[index].cnt >= this.heap[parentIndex].cnt) break
        // maxHeap: if (this.heap[index].cnt <= this.heap[parentIndex].cnt) break

        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
        index = parentIndex
      }
    }
    bubbleDown() {
      let index = 0
      while (index * 2 + 1 < this.heap.length) {
        let leftChild = index * 2 + 1
        let rightChild = index * 2 + 2
        let priorityChild = leftChild
        if (rightChild < this.heap.length && this.heap[rightChild].cnt < this.heap[leftChild].cnt) {
            priorityChild = rightChild
        }
        // maxHeap: if (rightChild < this.heap.length && this.heap[rightChild].cnt > this.heap[leftChild].cnt) {

        if (this.heap[index].cnt <= this.heap[priorityChild].cnt) break
        // maxHeap: if (this.heap[index].cnt >= this.heap[priorityChild].cnt) break

        [this.heap[index], this.heap[priorityChild]] = [this.heap[priorityChild], this.heap[index]]
        index = priorityChild
      }
    }
    isEmpty() {
      return this.heap.length === 0
    }
  }