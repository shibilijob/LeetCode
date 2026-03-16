/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  let result=0;
  let numbers=num.toString()
  for(x of numbers){
    let ogNum=parseInt(x)
    if(num%ogNum==0){
      result++
    }
  }
  return result
};