var join = function(arr1, arr2) {
    let merged = new Map();
    for (let obj of [...arr1, ...arr2]) {
       let existing = merged.get(obj.id) || {};
       merged.set(obj.id, {
          ...existing,
          ...obj
       });
    }
  let result = [...merged.values()];
  result.sort((a, b) => a.id - b.id);
  return result;
};