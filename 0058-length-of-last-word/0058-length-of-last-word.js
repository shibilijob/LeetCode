/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr=s.trim().split(' ');
    let number=arr[arr.length-1].length
    return number
};