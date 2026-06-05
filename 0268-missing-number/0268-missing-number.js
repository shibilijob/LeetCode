/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let ordered = nums.sort((a,b)=>a-b)
    for(let i=0;i<=nums.length;i++){
        if(ordered[i] !==i){
            return i
        }
    }
    
};