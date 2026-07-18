/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = [...new Set(arr)].sort((a,b)=>a-b)
    let rank= new Map()

    for(let i=0;i<sorted.length;i++){
        rank.set(sorted[i],i+1)
    }
    return result = arr.map(num=> rank.get(num))
};