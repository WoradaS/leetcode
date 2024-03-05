function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    for (let k = 0; k < nums.length; k++) {
      const two = nums[k];
      if (i == k) continue;
      if (first + two === target) return [i, k];
    }
  }
  // In case there is no solution, we'll just return null
  return null;
}

const testCases = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    result: [0, 1],
  },
  {
    nums: [3, 2, 4],
    target: 6,
    result: [1, 2],
  },
  {
    nums: [3, 3],
    target: 6,
    result: [0, 1],
  },
];

console.log(`TwoSum`);

testCases.forEach((testCase, i) => {
  console.log(
    `CASE ${i}: ${
      JSON.stringify(twoSum(testCase?.nums, testCase?.target)) === JSON.stringify(testCase?.result) ? "Pass" : "Fail"
    }`
  );
});
