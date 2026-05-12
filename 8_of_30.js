var compose = function(functions) {
    
    return function(x) {
        for(let i=functions.length-1; i>-1; i--){
            if(functions.length==0){
                return x;
            }
            else{
            x = functions[i](x);
            }
        }
        return x;
    }
};