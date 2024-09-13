class Collection<T> {
  private readonly arr = Array<T>();

  constructor(args: T[]) {
    this.arr.push(...args);
  }

  get _arr() {
    return this.arr;
  }

  push(...args: T[]) {
    this.arr.push(...args);
    return this.arr;
  }

  get peek(): T | undefined {
    return this.isQueue() ? this.arr[0] : this.arr.at(-1);
  }

  get poll(): T | undefined {
    return this.isQueue() ? this.arr.shift() : this.arr.pop();
  }

  remove(value?: T): T | undefined | boolean {
    return this.poll;
  }

  get length() {
    return this.arr.length;
  }

  get isEmpty() {
    return !this.arr.length;
  }

  clear() {
    this.arr.length = 0;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  // [1, 2, 3]
  *[Symbol.iterator]() {
    for (let i = this.length - 1; i >= 0; i -= 1) {
      yield this.toArray()[i];
    }
  }

  toArray() {
    return this.isQueue() ? this.arr.toReversed() : this.arr;
  }

  print() {
    console.log(`<${this.constructor.name}: [${this.toArray()}]>`);
  }

  private isQueue() {
    return this instanceof Queue;
  }
}

class Stack<T> extends Collection<T> {}
class Queue<T> extends Collection<T> {}

// ArrayList 클래스를 작성하세요.
class ArrayList<T> extends Collection<T> {
  constructor(args: T[]) {
    super(args);
  }

  add(value: T, index?: number): void {
    if (index === undefined) this._arr.push(value);
    else this._arr.splice(index, 0, value);
  }

  get(index: number): T | undefined {
    if (index <= 0 || index >= this._arr.length) return;
    return this._arr[index];
  }

  remove(value: T): boolean {
    const idx = this._arr.indexOf(value);
    return idx === -1 ? false : (this._arr.splice(idx, 1), true);
  }

  removeByIndex(index: number): boolean {
    if (index >= this._arr.length) return false;
    this._arr.splice(index, 1);
    return true;
  }

  set(index: number, value: T): void {
    this._arr[index] = value;
  }

  contains(value: T): boolean {
    return this._arr.includes(value);
  }

  indexOf(value: T): number {
    return this._arr.indexOf(value);
  }

  size(): number {
    return this.length;
  }

  toString(): string {
    const head = `${this.constructor.name}(${this.length}) `;
    let ret = 'null';
    for (let i of this._arr.toReversed()) {
      ret = `{ value: ${i}, rest: ${ret} }`;
    }
    return head + ret;
  }
}

const al = new ArrayList([1, 2, 3]);
console.log(al.toString());

export { Stack, Queue, ArrayList };
