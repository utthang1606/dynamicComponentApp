export function deepClone<T>(value: T): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    const newArray: any[] = [];
    for (const item of value) {
      newArray.push(deepClone(item));
    }
    return newArray as T;
  }

  if (typeof value === 'object') {
    const newObject: Record<string, any> = {};
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        newObject[key] = deepClone(value[key]);
      }
    }
    return newObject as T;
  }

  return value;
}
