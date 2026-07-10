/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let result = 0;
    for(let person of details){
        if(person[11]>6){
            result +=1
        }else if(person[11]==6 && person[12]>0){
            result +=1
        }
    }
    return result
};