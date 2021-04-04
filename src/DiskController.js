class Heap {
  constructor() {
    this.heap = []
  }
  peek(){ return this.heap[0] }
  getLeftChildIndex(parentIndex){ return parentIndex * 2 + 1 }
  getRightChildIndex(parentIndex){ return parentIndex * 2 + 2 }
  getParentIndex(childIndex){ return Math.floor((childIndex - 1) / 2) }
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
}

class PriorityQueue extends Heap {
  constructor() {
    super()
  }

  enqueue(priority, value){ this.insert(priority, value) }
  dequeue(){ return this.remove() }
  isEmpty(){ return this.heap.length <= 0 }
}

function solution(jobs) {
  var answer = 0;
  var q = new PriorityQueue()
  var len = jobs.length

  jobs.sort((a, b) =>a[0] - b[0]);
  var time = 0
  while(jobs.length || !q.isEmpty()){
    for(let i = 0; i < jobs.length; i++){
      if(jobs[0][0] <= time){
        q.enqueue(jobs[0][1], jobs[0][0])
        jobs.shift()
      }else{
        break
      }
    }
    
    if(!q.isEmpty()){
      let node = q.dequeue()
      time += node.key
      answer += time - node.value
    }else{
      time++
    }
  }

  return Math.floor(answer / len)
}