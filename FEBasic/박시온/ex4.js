function deepCopy(obj) {
  if (!obj || !(typeof obj === 'object')) return obj;

  let ret;
  if (obj instanceof Map) {
    ret = new Map();
    for (const [k, v] of obj) ret.set(k, deepCopy(v));
  } else if (obj instanceof Set) {
    ret = new Set();
    for (const v of obj) ret.add(deepCopy(v));
  } else if (obj instanceof WeakMap || obj instanceof WeakSet) {
    ret = obj;
  } else {
    ret = Array.isArray(obj) ? [] : {};
    for (const k of Reflect.ownKeys(obj)) {
      ret[k] = deepCopy(obj[k]);
    }
  }
  return ret;
}

module.exports = { deepCopy };
