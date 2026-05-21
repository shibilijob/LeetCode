/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
  const letters = s.toLowerCase().split('')
  let changes=0;
  
  for(let i=0;i<letters.length-1;i++){
    if(letters[i]!==letters[i+1]){
      changes+=1
    }
  }
  return changes
};