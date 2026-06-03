/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let sign = 0
    for(let i=0;i<nums.length;i++){
      if(nums[i]===0){
        return 0
      }else if(nums[i]<0){
        sign++
      }
    }
    if(sign%2===0){
      return 1
    }else if(sign%2 !==0){
      return -1
    }
};