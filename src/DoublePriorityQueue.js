class Heap {
  constructor() {
    this.heap = []
  }
  peek(){ return this.heap[0] }
  getLeftChildIndex(parentIndex){ return parentIndex * 2 + 1 }
  getRightChildIndex(parentIndex){ return parentIndex * 2 + 2 }
  getParentIndex(childIndex){ return Math.floor((childIndex - 1) / 2) }
  isEmpty(){ return this.heap.length <= 0 }
  insert(key, value){
    const node = { key, value } 
    this.heap.push(node) 
    this.heapifyUp() 
  }
  heapifyUp(){
    let index = this.heap.length - 1 
    const lastInsertedNode = this.heap[index]
    while (index > 0) {
      const parentIndex = this.getParentIndex(index)

      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex]
        index = parentIndex
      } else break
    }
    this.heap[index] = lastInsertedNode
  }
  remove(){
    const count = this.heap.length
    const rootNode = this.heap[0]

    if (count <= 0) return undefined
    if (count === 1) this.heap = []
    else {
      this.heap[0] = this.heap.pop() 
      this.heapifyDown() 
    }
    return rootNode
  }
  heapifyDown(){
    let index = 0
    const count = this.heap.length
    const rootNode = this.heap[index]

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)

      const smallerChildIndex =
        rightChildIndex < count && this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex

      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex]
        index = smallerChildIndex
      } else break
    }

    this.heap[index] = rootNode
  }
  convertMaxHeap() {
    let n = this.heap.length 
    for (let i = Math.round((n-2)/2); i >= 0; i--) 
      this.maxHeapify(i)
  }
  maxHeapify(i) { 
    let n = this.heap.length
    let left = 2*i + 1
    let right = 2*i + 2
    let largest = i
    if (left < n && this.heap[left].key > this.heap[i].key) 
        largest = left
    if (right < n && this.heap[right].key > this.heap[largest].key) 
        largest = right
    if (largest != i) { 
        let temp = this.heap[i]
        this.heap[i] = this.heap[largest]
        this.heap[largest] = temp
        this.maxHeapify(largest)
    }
  }
  convertMinHeap() {
    let n = this.heap.length 
    for (let i = Math.round((n-2)/2); i >= 0; i--) 
      this.minHeapify(i)
  }
  minHeapify(i) { 
    let n = this.heap.length
    let left = 2*i + 1
    let right = 2*i + 2
    let smallish = i
    if (left < n && this.heap[left].key < this.heap[i].key) 
        smallish = left
    if (right < n && this.heap[right].key < this.heap[smallish].key) 
        smallish = right
    if (smallish != i) { 
        let temp = this.heap[i]
        this.heap[i] = this.heap[smallish]
        this.heap[smallish] = temp
        this.minHeapify(smallish)
    }
  }
}


function solution(operations) {
  var answer = [];
  var h = new Heap();
  for(let operation of operations){
    let oper = operation.split(' ')
    if(oper[0] == 'I'){
      h.insert(Number(oper[1]), Number(oper[1]))
    }else{
      if(oper[1] == '-1'){
        h.remove()
      }else{
        h.convertMaxHeap()
        h.remove()
        h.convertMinHeap()
      }
    }
  }
  
  if(!h.isEmpty()){
    h.convertMaxHeap()
    answer.push(h.peek().key)
    h.convertMinHeap()
    answer.push(h.peek().key)
  }else{
    answer = [0, 0]
  }
  return answer;
}