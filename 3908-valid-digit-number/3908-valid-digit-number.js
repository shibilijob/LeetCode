/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function(n, x) {
    let arr = n.toString().split('')
    if(arr[0]==x){
        return false
    }
    for(let i=1;i<arr.length;i++){
        if(arr[i] == x){
            console.log(arr[i])
            return true
        }
        
        
    }
    return false

};