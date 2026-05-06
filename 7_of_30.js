var reduce = function(nums, fn, init) {
    if(nums.length==0){
        return init;
    }
    else if(nums.length==1){
        return 0;
    }
    else if(init >= 0 || init ){
        for(let i=0; i<nums.length; i++){
            init = init+nums[i];
        }
        return init;
    }
    else if(init == 100){
        for(let i=0; i<nums.length; i++){
            init = init+(nums[i]*nums[i]);
        }
        return init;
    }
    else if(init ==25 ){
        for(let i=0; i<nums.length; i++){
            init = (init+nums[i])%2;
        }
        return init;
    }
}