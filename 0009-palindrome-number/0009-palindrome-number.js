/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString().split('').reverse().join('')
    let z = Number(y)

    if(x === z){
        return true
    }else{
        return false
    }
};