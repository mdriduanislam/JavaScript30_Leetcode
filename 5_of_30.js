var map = function(arr, fn) {
    let newArr = [];
    let element;
    for(let i =0; i<arr.length; i++){
        element = fn(arr[i],i)
        newArr.push(element);
    }
    return newArr;
};