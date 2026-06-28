/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let ordered1 = s.split('').sort().join('')
    let ordered2 = t.split('').sort().join('')
    
    if(ordered1 == ordered2){
        return true
    }else{
        return false
    }

};