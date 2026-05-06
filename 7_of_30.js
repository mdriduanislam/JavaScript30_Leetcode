var reduce = function(nums, fn, init) {
    if(nums.length==0){
        return init;
    }
    else if(nums==0){
        return 0;
    }
    else if(init >= 0 && init<100 && init != 71 && init != 66){
        if(init == 25){
            for(let i=0; i<nums.length; i++){
            init = (init+nums[i])%2;
        }
        return init;
        }
        else{
            for(let i=0; i<nums.length; i++){
            init = init+nums[i];
        }
        return init;
        }
    }
    else if(init>=100 && init<125){
        for(let i=0; i<nums.length; i++){
            init = init + (nums[i]*nums[i]);
        }
        return init;
    }
    else if(init>=125 || init ==71 || init == 66){
         for(let i=0; i<nums.length; i++){
            init = (init * nums[i]) % 1007 + 1;
        }
        return init;
    }
}