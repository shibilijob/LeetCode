/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = []
    for(let first of nums1){
        for(let i=0;i<nums2.length;i++){
            if(first === nums2[i]){
                result.push(first)
                nums2.splice(i,1)
                break
            }
        }
    }
    return result
};