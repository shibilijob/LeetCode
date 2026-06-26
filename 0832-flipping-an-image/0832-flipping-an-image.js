/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let reversed=[]
    for(let im of image){
        for(let i=0;i<im.length;i++){
            if(im[i]===0){
                im[i]=1
            }else if(im[i]===1){
                im[i]=0
            }
        }
        reversed.push(im.reverse())
    }
    return reversed
};