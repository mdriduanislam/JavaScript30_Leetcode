var chunk = function(arr, size) {
    let bigArr=[];
    for(let i =0; i<arr.length; i=i+size){
        let chunkArr = arr.slice(i,i+size);
        bigArr.push(chunkArr);
    }
    return bigArr;
};