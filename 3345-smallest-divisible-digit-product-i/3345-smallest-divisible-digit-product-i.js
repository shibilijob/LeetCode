/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    let product = 1;
    
    for(let i=n;i>=n;i++){
        for(let digit of i.toString()){
            product *= Number(digit)
        }
        if(product % t == 0){
            return i
        }else{
            product=1
        }
    }
    
};