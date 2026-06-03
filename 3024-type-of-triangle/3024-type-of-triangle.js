/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    let type = 1
    if((nums[0]+nums[1])<=nums[2]) return 'none'
    if((nums[1]+nums[2])<=nums[0]) return 'none'
    if((nums[0]+nums[2])<=nums[1]) return 'none'
    for(let i=0;i<3;i++){
        if(nums[i]===nums[i+1]){
            type++
        }
        else if(nums[i] !==nums[i+1] && nums[i] ===nums[i+2]){
            type++
        }
    }
    if(type==3){
        return 'equilateral'
    }else if(type==2){
        return 'isosceles'
    }else if(type==1){
        return 'scalene'
    }
};