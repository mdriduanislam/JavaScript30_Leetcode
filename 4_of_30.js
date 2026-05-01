var createCounter = function(init) {
    const initialValue = init;
    return object = {
       increment(){
        return ++init;
       },
       decrement(){
        return --init;
       },
       reset(){
        init = initialValue;
        return init;
       }
    } 
};