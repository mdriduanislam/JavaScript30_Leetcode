let size = 3
let arr = [1, 2, 3, 4, 5];
let result = arr.splice(0, size);
console.log(arr); 
console.log(result);

var chunk = function(arr, size) {
    let bigArr=[];
    for(let i =0; i<arr.length; i++){
        let newArr = arr.splice(0,size);
        bigArr.push(newArr);
        if(newArr.length < arr.length){
         
        }
    }
};