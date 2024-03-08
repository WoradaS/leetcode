/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let buy = null
    // let sell = null
    // let best = 0

    // for(let i = 0; i < prices.length; i++){
    //     if(prices[i] <= (buy ?? 10**4)){
    //         buy = prices[i]
    //         sell = null
    //         continue
    //     }

    //     if(prices[i] > (sell ?? 0)){
    //         sell = prices[i]
    //         if(best < sell - buy){
    //             best = sell - buy
    //         }
    //     }
    // }

    // or

    let buy = null
    let sell = null
    let best = 0

    for(let i = 0; i < prices.length; i++){
        if(prices[i] <= (buy ?? 10**4)){
            buy = prices[i] 
            sell = null
            continue
        }
        
        // CASE 1 : If statement
        if(prices[i] > (sell ?? 0)){
            sell = prices[i]
            best = Math.max(best, sell - buy)
        }

        // or

        // CASE 2 : Math min max funtion
        // sell = Math.max(prices[i], sell)
        // best = Math.max(best, sell - buy)
    }
    return best
};