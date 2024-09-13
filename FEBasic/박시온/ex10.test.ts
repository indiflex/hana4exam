import { ArrayList } from './ex10';
import assert = require('assert');
console.log('🚀  ArrayList:', ArrayList);

const testArrayList = new ArrayList([1, 2, 3, 4, 5]);
assert.deepStrictEqual(testArrayList.toArray(), [1, 2, 3, 4, 5]);
testArrayList.add(9);
assert.deepStrictEqual(testArrayList.toArray(), [1, 2, 3, 4, 5, 9]);
testArrayList.add(7, 3);
assert.deepStrictEqual(testArrayList.toArray(), [1, 2, 3, 7, 4, 5, 9]);
assert.deepStrictEqual(testArrayList.get(3), 7);
assert.deepStrictEqual(testArrayList.get(8), undefined);
assert.deepStrictEqual(testArrayList.remove(3), true);
assert.deepStrictEqual(testArrayList.toArray(), [1, 2, 7, 4, 5, 9]);
assert.deepStrictEqual(testArrayList.remove(6), false);
assert.deepStrictEqual(testArrayList.toArray(), [1, 2, 7, 4, 5, 9]);
assert.deepStrictEqual(testArrayList.removeByIndex(4), true);
assert.deepStrictEqual(testArrayList.toArray(), [1, 2, 7, 4, 9]);
assert.deepStrictEqual(testArrayList.removeByIndex(6), false);
assert.deepStrictEqual(testArrayList.toArray(), [1, 2, 7, 4, 9]);
testArrayList.set(1, 3);
assert.deepStrictEqual(testArrayList.toArray(), [1, 3, 7, 4, 9]);
assert.deepStrictEqual(testArrayList.contains(7), true);
assert.deepStrictEqual(testArrayList.contains(8), false);
assert.deepStrictEqual(testArrayList.indexOf(7), 2);
assert.deepStrictEqual(testArrayList.indexOf(8), -1);
assert.deepStrictEqual(testArrayList.size(), 5);
const iter = testArrayList.iterator();
assert.deepStrictEqual(iter.next(), { value: 9, done: false });
assert.deepStrictEqual(iter.next(), { value: 4, done: false });
assert.deepStrictEqual(iter.next(), { value: 7, done: false });
assert.deepStrictEqual(iter.next(), { value: 3, done: false });
assert.deepStrictEqual(iter.next(), { value: 1, done: false });
assert.deepStrictEqual(iter.next(), { value: undefined, done: true });
assert.deepStrictEqual(
  testArrayList.toString(),
  'ArrayList(5) { value: 1, rest: { value: 3, rest: { value: 7, rest: { value: 4, rest: { value: 9, rest: null } } } } }'
);
assert.deepStrictEqual(testArrayList.isEmpty, false);
testArrayList.clear();
assert.deepStrictEqual(testArrayList.isEmpty, true);
