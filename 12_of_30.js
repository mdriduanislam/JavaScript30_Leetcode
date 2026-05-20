var addTwoPromises = async function(promise1, promise2) {
    let [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
};