/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function(nums) {
    let count = {}
    for(let i = 0; i < nums.length; i ++){
        count[nums[i]] = (count[nums[i]] ?? 0) + 1
    }
    for (const [key, value] of Object.entries(count)) {
        if(value == Math.max(...Object.values(count))) return key
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function(nums) {
    let count = {}
    let max = 0
    let major = null
    for(let i = 0; i < nums.length; i ++){
        count[nums[i]] = (count[nums[i]] ?? 0) + 1
        if(( count[nums[i]] ?? 0 ) >= max){
            major = nums[i]
            max++
        }
        console.log(`count ${nums[i]}:`,count[nums[i]],` ,max: `,max)
    }
    return major
};
