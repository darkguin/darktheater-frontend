export class Queue<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  enqueue(item: T) {
    if (this.size() === this.capacity) {
      throw Error('Queue has reached max capacity, you cannot add more items');
    }

    this.storage.push(item);
  }

  peek(): T | undefined {
    return this.storage[0];
  }

  dequeue(): T | undefined {
    return this.storage.shift();
  }

  size(): number {
    return this.storage.length;
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.storage.find(predicate);
  }
}
