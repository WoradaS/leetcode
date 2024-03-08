/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let index = 0;
    // for(let i = 0; i < nums.length; i++){
    //     if(nums.findIndex((e) => e == nums[i]) == i){
    //         nums[index] = nums[i]
    //         index++;
    //     }else{
    //         nums.splice(i,1)
    //         i--
    //     }
    // }
    // return index

    // or
    const set = new Set(nums)

    nums.splice(0, nums.length, ...set)
    return nums.length
};