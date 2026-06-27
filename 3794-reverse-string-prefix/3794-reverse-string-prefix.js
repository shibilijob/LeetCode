/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    let splited = s.split('')
    let letters = ''
    for(let i=0;i<k;i++){
        letters +=splited[i]
    }
    let reversed = letters.split('').reverse().join('')
    let sliced = s.slice(k)
    let result = [...reversed,...sliced].join('')
    console.log(result)
    return result
    
};