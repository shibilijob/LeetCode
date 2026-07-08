
var getMinDistance = function(nums, target, start) {
    let dist =[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            dist.push(Math.abs(i-start))
        }
    }
    return Math.min(...dist)
};