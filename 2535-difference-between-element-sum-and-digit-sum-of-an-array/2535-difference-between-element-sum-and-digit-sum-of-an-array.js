/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
  let sum = 0
  let digitSum = 0

  for(let i = 0; i < nums.length; i++){
    sum += nums[i]

    let digits = nums[i].toString().split('')
    
    for(let j = 0; j < digits.length; j++){
      digitSum += Number(digits[j])
    }
  }

  return sum - digitSum
};