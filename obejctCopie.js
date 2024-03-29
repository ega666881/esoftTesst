function deepClone(obj, clonedObjects = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (clonedObjects.has(obj)) {
        return clonedObjects.get(obj);
    }

    let clone = Array.isArray(obj) ? [] : {};

    clonedObjects.set(obj, clone);

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key], clonedObjects);
        }
    }

    return clone;
}

const originalObject = {
    a: 1,
    b: { c: 2 },
    d: [3, 4],
};

const clonedObject = deepClone(originalObject);
console.log(clonedObject);