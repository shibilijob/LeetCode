/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
  let single=0;
  let double=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]<=9){
      single+=nums[i]
    }else if(nums[i]>9){
      double+=nums[i]
    }
  }
  if(single!==double){
    return true
  }else{
    return false
  }
};