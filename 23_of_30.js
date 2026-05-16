Array.prototype.groupBy = function(fn) {
    let grouped = {};
    for (let item of this) {
        let key = fn(item);
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);
    }
    return grouped;
};