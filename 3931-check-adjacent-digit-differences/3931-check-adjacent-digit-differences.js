/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function(s) {
    for(let i=0;i<s.length;i++){
        const defference = Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))

        if(defference >2){
            return false
        }
    }
    return true
};