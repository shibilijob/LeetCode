/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    for(let num of nums1){
        for(let nums of nums2){
            if(num === nums && !result.includes(num)){
                result.push(num)
            }
        }
    }
    return result
};