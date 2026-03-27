/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  for(word of words){
    let palindrom=''
    for(let i=word.length-1;i>=0;i--){
      palindrom+=word[i]
    }
    if(word===palindrom){
      return palindrom;
    }
  }
  return ''
};