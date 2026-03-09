/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max =0;
    for(sentence of sentences){
        let count = 1
        for(word of sentence){
            if(word == ' '){
                count++
            }
        }
        if(count>max){
            max=count
        }
    }
    return max
};