/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minimumPrice = prices[0]
    let maximumProfit = 0

    for(let i=0;i<prices.length;i++){
        if(prices[i] < minimumPrice){
            minimumPrice = prices[i]
        }
        let currentProfit = prices[i]-minimumPrice
        if(currentProfit > maximumProfit){
            maximumProfit = currentProfit
        }
    }
    return maximumProfit
};