/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max=0;
  for(person of accounts){
    let sum1=0;
    for(wealth of person){
      sum1+=wealth
    }
    if(sum1>max){
      max=sum1;
    }
  }
  return max
};