//heap...
function solution(n, works) {
  const maxHeap = new MaxHeap(works);

  while (n > 0) {
    const maxWork = maxHeap.extractMax();
    if (maxWork === 0) break;
    maxHeap.insert(maxWork - 1);
    n--;
  }

  return maxHeap.calculateWorkload();
}

class MaxHeap {
  constructor(arr = []) {
    this.heap = arr;
    this.buildHeap();
  }

  buildHeap() {
    const startIndex = Math.floor((this.heap.length - 1) / 2);
    for (let i = startIndex; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMax() {
    if (this.isEmpty()) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[idx] <= this.heap[parentIdx]) break;
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      idx = parentIdx;
    }
  }

  heapifyDown(idx) {
    const leftIdx = 2 * idx + 1;
    const rightIdx = 2 * idx + 2;
    let largestIdx = idx;

    if (
      leftIdx < this.heap.length &&
      this.heap[leftIdx] > this.heap[largestIdx]
    ) {
      largestIdx = leftIdx;
    }

    if (
      rightIdx < this.heap.length &&
      this.heap[rightIdx] > this.heap[largestIdx]
    ) {
      largestIdx = rightIdx;
    }

    if (largestIdx !== idx) {
      [this.heap[idx], this.heap[largestIdx]] = [
        this.heap[largestIdx],
        this.heap[idx],
      ];
      this.heapifyDown(largestIdx);
    }
  }

  calculateWorkload() {
    return this.heap.reduce((acc, val) => acc + val * val, 0);
  }
}

//시간 초과
function solution(n, works) {
  works.sort((a, b) => b - a);

  while (n > 0) {
    works[0] -= 1;
    n -= 1;
    works.sort((a, b) => b - a);
    if (works[0] === 0) {
      break;
    }
  }

  let answer = 0;

  return works.map((n) => Math.pow(n, 2)).reduce((a, b) => a + b);
}
