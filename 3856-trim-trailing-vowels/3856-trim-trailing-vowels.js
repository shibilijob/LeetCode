/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
    let i = s.length-1
    while(i>=0 && 'aeiou'.includes(s[i])){
        i--
    }
    return s.slice(0,i+1)
};